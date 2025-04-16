import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary " : "")}
            to="/table"
          >
            Table
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/list"
          >
            List
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
