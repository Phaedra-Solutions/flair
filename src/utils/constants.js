import { VscHome } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiTool } from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import { BsShield } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Icon } from "../components/_common";

const iconProps = {
  size: "1em",
  color: "#04AFAF",
};
export const routes = [
  {
    path: "/",
    displayName: "Home",
    icon: <Icon pureIcon={<VscHome {...iconProps} />} />,
  },
  {
    path: "/contact-details",
    icon: <Icon pureIcon={<AiOutlineUser {...iconProps} />} />,
    displayName: "Contact details",
  },
  {
    path: "/skills",
    icon: <Icon pureIcon={<FiTool {...iconProps} />} />,
    displayName: "Skills",
  },
  {
    path: "/interview",
    icon: <Icon pureIcon={<BiChat {...iconProps} />} />,
    displayName: "Interview",
  },
  {
    path: "/qualification",
    icon: <Icon pureIcon={<BsShield {...iconProps} />} />,
    displayName: "Qualification",
  },
  {
    path: "/work-experience",
    icon: <Icon pureIcon={<AiOutlineStar {...iconProps} />} />,
    displayName: "Work Experience",
  },
  {
    path: "/my-hr",
    icon: <Icon pureIcon={<FaRegSmile {...iconProps} />} />,
    displayName: "My HR",
  },
  {
    path: "/my-jobs",
    icon: <Icon pureIcon={<CgFileDocument {...iconProps} />} />,
    displayName: "My Jobs",
  },
];
