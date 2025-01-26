import React from 'react'
import './ChatBotApp.css'

const ChatBotApp = () => {
  return (
    <div className='chat-app'>
        <div className="chat-list">
            <div className="chat-list-header">
                <h2>Chat List</h2>
                <i className="bx bx-edit-alt new-chat"></i>
            </div>
            <div className="chat-list-item active">
                <h4>Chat 26/01/2025</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 26/01/2025</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 26/01/2025</h4>
                <i className="bx bx-x-circle"></i>
            </div>
        </div>
        <div className="chat-window">
            <div className="chat-title">
                <h3>Chat with AI</h3>
                <i className="bx bx-arrow-back arrow"></i>
            </div>
            <div className="chat">
                <div className="prompt">hi! <span>12:51 PM</span></div>
                <div className="response">hello! <span>12:53 PM</span></div>
            </div>
            <div className="typing">
                Typing...
            </div>
            <form action="" className='message-form'>
                <i className="fa-solid fa-face-smile emoji"></i>
                <input type="text" className="message-input" placeholder='Type a message...' />
                <i className="fa-solid fa-paper-plane"></i>
            </form>
        </div>
    </div>
  )
}

export default ChatBotApp