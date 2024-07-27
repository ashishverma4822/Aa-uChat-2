import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col md:w-[600px] lg:w-[800px] xl:w-[1000px] flex-1 bg-dark-blue border-1 border-t border-r border-b border-neon-blue rounded-xl shadow-neon-blue">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-800 px-4 py-2 mb-2 rounded-t-xl border-b border-neon-blue">
            <span className="label-text text-white">To: </span>
            <span className="text-gray-100 font-bold">
              {selectedConversation?.username}
            </span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-slate-200 font-semibold flex flex-col items-center gap-2">
        <p>Aa-uChat : Spread Love</p>

        <p>Select a chat to start messaging</p>

        <TiMessages className="text-3xl md:text-6xl text-center text-slate-300" />
      </div>
    </div>
  );
};

export default MessageContainer;
