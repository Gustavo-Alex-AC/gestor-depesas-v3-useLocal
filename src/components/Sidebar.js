import React, { useEffect, useState } from "react";
import style from "./Icon.module.css";
import { NavLink } from "react-router-dom";
import IconDashboard from "./IconDashboard";
import Logo from "./Logo";
import Profile from "./Profile";
import IconIncome from "./IconIncome";
import IconExpense from "./IconExpense";
import IconApoio from "./IconApoio";
import IconInstruction from "./IconInstruction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import SignOutIcon from "./SignOutIcon";
import Footer from "./Footer";

const Sidebar = () => {
  const isTabletOrBelow = useMediaQuery({ query: "(max-width: 64em)" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //const {handleSignOut} = useAuth();

  // Add a function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Set initial sidebar visibility based on the screen width
    setIsSidebarOpen(!isTabletOrBelow);
  }, [isTabletOrBelow]);

  // Close the sidebar when a link is clicked or anywhere on the screen is clicked
  // eslint-disable-next-line
  const closeSidebar = () => {
    if (isSidebarOpen && isTabletOrBelow) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the sidebar
      if (isSidebarOpen && !e.target.closest(`.${style.sidebar}`)) {
        closeSidebar();
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen, closeSidebar, isTabletOrBelow]);

  return (
    <div
      className={` ${
        !isSidebarOpen && isTabletOrBelow ? style.sidebarClose : style.sidebar
      } ${isSidebarOpen && isTabletOrBelow ? "" : ""}`}
    >
      <div className={style.sidebarContent}>
        {isTabletOrBelow && (
          <div className={style.toggleButton} onClick={toggleSidebar}>
            <FontAwesomeIcon
              icon={isSidebarOpen ? faTimes : faBars}
              size="lg"
            />
          </div>
        )}
        {isSidebarOpen && (
          <>
            <Logo />
            <Profile />

            <h2 className={style.h2}>Geral</h2>
            <NavLink
              to={"/dashboard"}
              className={style.navLink}
              onClick={closeSidebar}
            >
              <IconDashboard />
            </NavLink>

            <NavLink
              to={"/receitas"}
              className={style.navLink}
              onClick={closeSidebar}
            >
              <IconIncome />
            </NavLink>

            <NavLink
              to={"/despesas"}
              className={style.navLink}
              onClick={closeSidebar}
            >
              <IconExpense />
            </NavLink>

            <h2 className={style.h2}>Extras</h2>
            <NavLink
              to={"/instrucoes"}
              className={style.navLink}
              onClick={closeSidebar}
            >
              <IconInstruction />
            </NavLink>

            <NavLink
              to={"/apoio"}
              className={style.navLink}
              onClick={closeSidebar}
            >
              <IconApoio />
            </NavLink>

            <NavLink className={style.sair} to={"/"}>
              <SignOutIcon />
            </NavLink>

            <Footer className={style.footer} />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
