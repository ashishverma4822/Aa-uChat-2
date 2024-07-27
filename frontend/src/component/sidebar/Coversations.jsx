import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  // console.log(conversations)

  return (
    <div className="flex flex-col overflow-auto bg-black text-neon-blue">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading && (
        <div className="flex justify-center items-center py-2">
          <span className="animate-spin text-neon-blue">🔄</span> {/* Replace with your spinner */}
        </div>
      )}
    </div>
  );
};

export default Conversations;