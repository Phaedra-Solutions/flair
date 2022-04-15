import "./header.css";
import { useState } from "react";
import Avatar from "react-avatar";
import avatar from "../../../img/avatar.jpg";
import flair from "../../../img/flair.jpeg";
const Header = () => {
  const contactNo = "Head Office:0161 241 2441";
  const email = "hello@flairpeople.com";
  const [navItems, setNavItems] = useState([
    "Workers",
    "Job Board",
    "Clients",
    "Industries",
    "About Us",
  ]);
  return (
    <div className="header">
      <div className="container">
        <div className="top-bar">
          <span className="text-white text-12">{`${contactNo} | ${email}`}</span>
        </div>
        <div className="nav-container">
          <div className="flair-heading">
            <Avatar
              size="35"
              round={true}
              src={flair}
              style={{ marginRight: "10px" }}
            ></Avatar>
            <span className="text-white text-28 bolder">flair</span>
            <span className="text-white text-26 bold">people</span>
          </div>
          <nav className="nav-bar">
            {navItems.map((item, index) => (
              <a href="#" className="nav-items">
                {item}
              </a>
            ))}
            <Avatar
              size="25"
              round={true}
              src={avatar}
              style={{ marginLeft: "15px" }}
            ></Avatar>
            <button className="logout" onClick={() => {}}>
              logout
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
