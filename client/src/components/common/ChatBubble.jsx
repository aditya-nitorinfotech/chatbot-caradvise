import React from "react";



const ChatBubble = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div class="chat-bubble">
                    <div class="typing">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>)}
        </>

    )

}

export default ChatBubble