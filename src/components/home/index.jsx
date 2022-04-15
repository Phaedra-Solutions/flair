import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { ImSad } from "react-icons/im";
import "./home.css";
import { GradientCircularProgress } from "react-circular-gradient-progress";

const Home = () => {
  const progressItems = [
    { name: "Contact details", status: true },
    { name: "Skills", status: false },
    { name: "Interview", status: false },
    { name: "Application form", status: false },
  ];
  return (
    <div>
      <div className="progress-main box-shadow">
        <div className="progress-container shadow flex-center">
          <GradientCircularProgress
            color="#F00"
            size={100}
            progress={75}
            startColor="#EA571C"
            middleColor="#21155F"
            endColor="#01C4B1"
            strokeWidth={4}
          />
        </div>
        <div className="progress-items">
          {progressItems.map((item, index) => (
            <div
              className="item"
              style={{
                borderBottom:
                  progressItems.length - 1 !== index
                    ? "1px solid lightgray"
                    : "none",
              }}
            >
              <a
                href="#"
                className="text-14 bold"
                style={{
                  color: "#21155F",
                }}
              >
                {item.name}
              </a>
              {item.status ? (
                <AiOutlineCheck color="#01C4BA" size={"1.2em"} />
              ) : (
                <IoMdClose color="#EA571C" size={"1.2em"} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="arrange-chat">
        <div className="text-area">
          <span className="text-white text-24 bolder">Arrange a chat</span>
          <span
            className="text-white text-12 "
            style={{ margin: "10px 0px 25px 0px" }}
          >
            Before we place you, we need to get to know each other! Book in for
            a quick<b> 5 minute chat</b> and then start applying.
          </span>
          <button className="booknow-btn">Book now</button>
        </div>
        <div className="icon-area">
          <img
            src={require("../../img/chat.png")}
            style={{ height: 80, width: 80 }}
          ></img>
          <span className="shadow-icon"></span>
        </div>
      </div>
      <div style={{ margin: "20px 100px 10px" }}>
        <a
          href="#"
          className="text-16 bolder"
          style={{
            color: "#21155F",
          }}
        >
          My Jobs
        </a>
      </div>
      <div className="my-job-cont box-shadow">
        <div className="div-sad">
          <ImSad color="gray" size={"1.3em"} />
        </div>
        <div
          className="flex-between"
          style={{ width: "100%", padding: "0px 15px 0px 20px" }}
        >
          <span className="my-job-text">No application is submitted yet.</span>
          <button className="go-to-btn">Go to jobs board</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
