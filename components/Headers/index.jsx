import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userReducer = useSelector((state) => state.userReducer);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="pb-[50px]">
        <Header toggleSidebar={toggleSidebar} userReducer={userReducer} />
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          userReducer={userReducer}
        />
        {isOpen && (
          <p
            className="bg-black fixed inset-0 opacity-40 z-50"
            onClick={toggleSidebar}
          ></p>
        )}
      </div>
    </>
  );
};

export default TopHeader;
