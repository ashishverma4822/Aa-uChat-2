import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import MessageContainer from "../component/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-screen max-h-[600px] rounded-lg overflow-hidden bg-black">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
