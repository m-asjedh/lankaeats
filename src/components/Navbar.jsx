import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearch, IoHomeOutline, IoPricetagOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    {
      id: 1,
      link: "/",
      name: "Home",
      icon: <IoHomeOutline size={25} />,
    },
    {
      id: 2,
      link: "rated",
      name: "Top Rated",
      icon: <IoPricetagOutline size={25} />,
    },
    {
      id: 3,
      link: "menu",
      name: "Menu",
      icon: <PiBookOpenTextDuotone size={25} />,
    },
    {
      id: 4,
      link: "category",
      name: "Categories",
      icon: <BiCategory size={25} />,
    },
  ];

  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <FiMenu size={30} />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl px-3 font-bold">
          Lanka Eats
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[400px]">
        <IoSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full">
        <FaCartShopping size={20} className="mr-2" /> Cart
      </button>

      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen z-10 bg-black/80"></div>
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300 overflow-y-auto"
            : "fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300 overflow-y-auto"
        }
      >
        <IoMdClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-lg sm:text-xl p-4 font-bold">Lanka Eats</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {navigation.map((item) => (
              <li key={item.id} className="my-2">
                <Link
                  to={item.link}
                  className="flex items-center text-sm sm:text-base"
                  onClick={closeNav}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
