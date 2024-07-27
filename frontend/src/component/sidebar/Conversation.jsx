import React from "react";
import userAvatar from "../../assets/user.png";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-blue-500 text-black" : "bg-dark-blue text-neon-blue hover:bg-blue-500 hover:text-black"
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`relative w-10 h-10 rounded-full overflow-hidden ${isOnline ? "border-2 border-green-500" : ""}`}>
          <img
            src={conversation.profilePic || userAvatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{conversation.username}</p>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1 bg-neon-blue"></div>}
    </>
  );
};

export default Conversation;
