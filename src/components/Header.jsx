import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./Menuitem";
import ThemeComp from "./ThemeComp";
const Header = () => {
  const menus = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign in",
      url: "/login",
    },
  ];
  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          placeholder="Search Here!"
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp/>
      {menus.map((menu, index) => {
        return <MenuItem menu={menu} key={index} />;
      })}
    </div>
  );
};

export default Header;
