import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex justify-center items-center">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-neon-blue cursor-pointer hover:text-white transition-colors"
          onClick={logout}
        />
      ) : (
        <span className="animate-spin text-neon-blue">🔄</span> // Replace with your spinner if needed
      )}
    </div>
  );
};

export default LogoutButton;