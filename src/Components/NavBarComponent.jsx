import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBarComponent = ({}) => {
  return (
    <div className="container justify-between mx-auto bg-blue-300 flex items-center h-[100px]">
      <h1>Code learning</h1>
      <nav>
        <ul className="flex gap-[20px] ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarComponent;
