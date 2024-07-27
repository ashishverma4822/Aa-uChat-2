import React from "react";
import SearchInput from "./SearchInput";
import Coversations from "./Coversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-neon-blue bg-custom-dark rounded-xl shadow-neon-blue p-4">
      {/* Title */}
      <div className="text-2xl text-center font-bold text-neon-blue mb-6">
        Aa-uChat
      </div>

      <SearchInput />
      <div className="divider px-2 border-neon-blue"></div>
      <Coversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
