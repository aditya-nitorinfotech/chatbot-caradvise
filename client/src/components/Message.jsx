import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import "./Message.css"

const Messages = ({ messages,isLoading }) => {
    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => {
            elementRef.current.scrollIntoView()
        },[isLoading]);
        return <div ref={elementRef} />;
    };



    return (
        <Flex w="100%" height={250} maxH={300} overflowY="scroll" flexDirection="column" p="3">
            {messages.map((item, index) => {
                if (item.from === "me") {
                    return (
                        <Flex key={index} w="100%" justify="flex-end">
                            <Flex
                                bg="black"
                                color="white"
                                minW="100px"
                                maxW="350px"
                                borderTopLeftRadius={15}
                                my="1"
                                p="3"
                            >
                                <Text>{item.text}</Text>
                            </Flex>
                        </Flex>
                    );
                } else {
                    return (
                        <Flex key={index} w="100%" mt={7}>

                            {/* {isLoading && (
                                <div class="chat-bubble">
                                    <div class="typing">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                </div>) } */}
                                <Avatar
                                    name="Computer"
                                    src="https://shorturl.at/hBE68"
                                    bg="blue.300"
                                    size="sm"
                                ></Avatar><Flex
                                    bg="gray.100"
                                    color="black"
                                    minW="150px"
                                    maxW="700px"
                                    my="1"
                                    p="3"
                                    borderTopRightRadius={15}
                                    marginLeft="2%"
                                >
                                        <Text>{item.text}</Text>
                                    </Flex>
                        </Flex>
                    );
                }
            })}
            <AlwaysScrollToBottom />
        </Flex>
    );
};


export default Messages;
