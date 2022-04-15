import { Header, TabItem } from "../_common";
import "./dashboard.css";
import Home from "../home";
import { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineStar, AiOutlinePlus } from "react-icons/ai";
import { FiTool } from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import { BsShield, BsCamera } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Icon } from "../_common";

const Dashboard = () => {
  const [currentPage, setcurrentPage] = useState("Home");

  const components = {
    Home: {
      comp: <Home />,
      icon: (
        <Icon
          pureIcon={
            <VscHome
              size="1.2em"
              color={currentPage == "Home" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },

    "Contact details": {
      comp: <>This page is for contact details</>,
      icon: (
        <Icon
          pureIcon={
            <AiOutlineUser
              size="1.2em"
              color={currentPage == "Contact details" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
    Skills: {
      comp: <>This page is for Skills</>,
      icon: (
        <Icon
          pureIcon={
            <FiTool
              size="1.2em"
              color={currentPage == "Skills" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
    Interview: {
      comp: <>This page is for Interview</>,
      icon: (
        <Icon
          pureIcon={
            <BiChat
              size="1.2em"
              color={currentPage == "Interview" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
    Qualification: {
      comp: <>This page is for Qualification</>,
      icon: (
        <Icon
          pureIcon={
            <BsShield
              size="1.2em"
              color={currentPage == "Qualification" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
    "Work Experience": {
      comp: <>This page is for Work Experience</>,
      icon: (
        <Icon
          pureIcon={
            <AiOutlineStar
              size="1.2em"
              color={currentPage == "Work Experience" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
    "My HR": {
      comp: <>This page is for My HR</>,
      icon: (
        <Icon
          pureIcon={
            <FaRegSmile
              size="1.2em"
              color={currentPage == "My HR" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
    "My Jobs": {
      comp: <>This page is for My Jobs</>,
      icon: (
        <Icon
          pureIcon={
            <CgFileDocument
              size="1.2em"
              color={currentPage == "My Jobs" ? "white" : "#04AFAF"}
            />
          }
        />
      ),
    },
  };

  return (
    <div className="main-container">
      <Header></Header>
      <div className="img-name">
        <div className="circle">
          <div className="inside-circle flex-center ">
            <BsCamera color="gray" size="1.5em" fontWeight={"bold"} />
          </div>
          <div className="add-img flex-center circle-shadow">
            <AiOutlinePlus color="#EA571C" />
          </div>
        </div>
        <span
          className="text-white text-28 bolder"
          style={{ marginLeft: "20px" }}
        >
          James Huxley
        </span>
      </div>

      <div className="content">
        <div className="banner">
          <img
            src={require("../../img/dummy.jpg")}
            className="banner-img"
          ></img>
        </div>
        <div className="main-content">
          <div className="routes">
            <div className="tabs">
              {Object.keys(components).map((comp) => (
                <TabItem
                  displayName={comp}
                  item={components[comp]}
                  onClick={() => setcurrentPage(comp)}
                  currentPage={currentPage}
                />
              ))}
            </div>
            <div className="pages route-component-shadow">
              {components[currentPage].comp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
