import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
    return (
        
            <Flex w="100%" marginTop="3%">
                <Input
                    placeholder="Type Something..."
                    border="1px"
                    borderRadius="none"
                    _focus={{
                        border: "1px solid black",
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSendMessage();
                        }
                    }}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />

                <Button
                    bg="darkgray"
                    color="white"
                    borderRadius={15}
                    size="md"
                    marginLeft="2%"
                
                    _hover={{
                        bg: "white",
                        color: "black",
                        border: "1px solid black",

                    }}
                    disabled={inputMessage.trim().length <= 0}
                    onClick={()=>{setInputMessage("")}}
                >
                    Clear
                </Button>
            </Flex>
        
    );
};

export default Footer;
