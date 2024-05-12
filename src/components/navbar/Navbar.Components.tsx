import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './Navbar.css'


interface NavbarProps {
  host?: string;
}

const Navbar: React.FC<NavbarProps> = ({ host }) => {
  const isHomePage = host === "http://localhost:5173/";
  const navbarClass = isHomePage ? "" : "navbar-bg"; 
  const navigate = useNavigate();

  const handleNavigation = (url:string) => {
    navigate(url); // Absolute path or route name
  };

  const handleAlert= () => {
    alert('123')
  };

  return (
    <>
      <div className={`navbar-wrapper w-full mx-auto px-20 hidden   md:flex justify-between items-center fixed ${navbarClass}`}>
        <ul className="flex justify-center items-center flex-1">
          <li className="p-2 lg:mx-4 mx-2 bg-slate-500 cursor-pointer">Giới thiệu</li>
          <li className="p-2 lg:mx-4 mx-2 bg-slate-500 cursor-pointer">Hồ sơ</li>
          <li className="p-2 lg:mx-4 mx-2 bg-slate-500 cursor-pointer">Dịch VỤ</li>
        </ul>
        <div className="w-28 lg:mx-4 mx-2 py-1 cursor-pointer" onClick={()=>handleNavigation("/")} >
          <img className='img' src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-beauty-logo-design-png-image_6568470.png" alt="logo" />
        </div>
        <ul className="flex justify-center items-center flex-1">
          <li className="p-2 lg:mx-4 mx-2 bg-slate-500 cursor-pointer">Dịch Vụ</li>
          <li className="p-2 lg:mx-4 mx-2 bg-slate-500 cursor-pointer">Blog</li>
          <li className="p-2 lg:mx-4 mx-2 bg-slate-500 cursor-pointer" onClick={()=>handleNavigation("/user")}>User</li> 
        </ul>
      </div>


      <div className=" block md:hidden fixed right-0 w-full  z-50 flex justify-end p-4" onClick={handleAlert}>
        <div className="w-12 h-12 flex justify-center items-center cursor-pointer bg-slate-500">
          <FontAwesomeIcon  icon={faBars}/>
        </div>
          
      </div>
    </>
  );
};

export default Navbar;
