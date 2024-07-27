import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { formatTime } from "../../utils/formatTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const messageFromMe = message.senderId === authUser._id;
  const chatClassName = messageFromMe ? "chat-end" : "chat-start";

  const profilePic = messageFromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const msgBgColor = messageFromMe ? "bg-neon-blue" : "bg-dark-gray";
  const textColor = messageFromMe ? "text-black" : "text-neon-blue";

  const formattedTime = formatTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic || userAvatar} // Fallback to a default avatar if profilePic is missing
            alt="User Avatar"
            className="border-2 border-neon-blue"
          />
        </div>
      </div>

      <div className={`chat-bubble ${msgBgColor} ${textColor} p-2 rounded`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-neon-blue">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
