import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Message";
import "./Chat.css"
import axios, { AxiosHeaders } from 'axios';
import ChatBubble from "../components/common/ChatBubble";




const Chat = () => {
    const [messages, setMessages] = useState([
        // { from: "bot", text: "Hello, I am the Customer Onboarding and Car Diagnosis bot for Car Advising company. How may I assist you today?" },
        // { from: "me", text: "Hi" },

    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    // const api = axios.create({
    //     baseURL: process.env.REACT_APP_API_URL,
    // });

    useEffect(() => {
      
        (async () => {
            setIsLoading(true)
            const url = 'http://localhost:5000/chat';
            const response = await axios.get(url);
            // console.log("response", response)
                setTimeout(() => {  
                    if(response.data!=400)
                        setMessages((old) => [...old, { from: "bot", text: response.data }]);
                       
                    }, 1000)
                setIsLoading(false)
           

        })();
     


    }, [])



    const handleSendMessage = async () => {
        setIsLoading(true)
        if (!inputMessage.trim().length) {
            return;
        }
        const data = inputMessage.toString();

        setMessages((old) => [...old, { from: "me", text: data }]);
        setInputMessage("");

        // setTimeout(() => {
        //             setMessages((old) => [...old, { from: "bot", text: data }]);
        //         }, 1000);

        const url = 'http://localhost:5000/chat';
        const response = await axios.post(url, { "prompt": `${data}` }
        );

        console.log("response at end user", response)
        setIsLoading(false)
        let responseData = response.data?.length ? (response.data).toString() : null;

        if (!responseData) {
            return null;
        }
        else {
            setTimeout(() => {
                setMessages((old) => [...old, { from: "bot", text: responseData }]);
            }, 1000);

        }
        return response
        // return "ok"


    };

    return (
        <div className="chatBg">
            <Flex width="82%" justify="center" align="center" className="chatBox" marginLeft="10%">
                <Flex flexDirection="column" width="98%" >
                    <Header />
                    <Divider />
                    <Messages messages={messages} isLoading={isLoading} />
                    <ChatBubble isLoading={isLoading} />
                    <Divider />
                    <Footer
                        inputMessage={inputMessage}
                        setInputMessage={setInputMessage}
                        handleSendMessage={handleSendMessage}
                    />
                </Flex>
            </Flex>


        </div>
    );
};

export default Chat;
