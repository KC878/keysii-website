import "./styles/index.css";
import "./styles/contentOneLeft.css";

import Header from "./components/Header";
import { useState } from "react";
import type { HeaderItems } from "./types/types"; // explicityly define type
import { logos } from "./constants/logos";

import { MdCallMade } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";

const App = () => {
  const [headerItems] = useState<HeaderItems[]>([
    { id: "home", title: "HOME" },
    { id: "about", title: "ABOUT" },
    { id: "portfolio", title: "PORTFOLIO" },
    { id: "service", title: "SERVICE" },
    { id: "pages", title: "PAGES" },
    { id: "contact", title: "CONTACT" },
  ]);

  const [hireMeHover, setHireMeHover] = useState<boolean>(false);
  const [downArrowHover, setDownArrowHover] = useState<boolean>(false);

  console.log(typeof headerItems);

  const [logoHover, setLogoHover] = useState<boolean>(false);
  const [somethingHover, setSomethingHover] = useState<boolean>(false);

  return (
    <>
      <div className="main-container">
        <div className="header">
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            {/* Logo */}
            <div
              style={{
                flexGrow: 1,
                backgroundColor: logoHover ? "skyblue" : "lightblue",
                transition: "background 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
            >
              <img src={logos.logo} />
            </div>

            {/* HeaderItems */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexGrow: 1,
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Header headerItems={headerItems} />
            </div>

            {/* Something Button To add */}
            <div
              style={{
                flexGrow: 1,
                backgroundColor: "blue",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: somethingHover ? "black" : "white",
                  transition: "background 0.3s",
                }}
                onMouseEnter={() => setSomethingHover(true)}
                onMouseLeave={() => setSomethingHover(false)}
              >
                Click
              </button>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="content-one">
            {/* Left Side */}
            <div className="leftContentOne-container">
              <div className="textOne">Welcome To my World</div>
              <div className="textTwo">Hello, I am</div>
              <div className="textThree">Kent Christian E. Cagadas</div>
              <div className="textFour">
                Full Stack Developer / Data Analyst
              </div>
              <div className="textFive">
                Who says there are no shortcut in life? When I literally
                invented one.
              </div>
              <div className="textSix">
                <div
                  className="hireMe-button"
                  style={{
                    borderStyle: hireMeHover ? "inset" : "outset",
                    backgroundColor: hireMeHover ? "lightskyblue" : "#ced2d7",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHireMeHover(true)}
                  onMouseLeave={() => setHireMeHover(false)}
                >
                  <div>Hire Me</div>
                  <MdCallMade />
                </div>
              </div>
              <div className="TextSeven">
                <div
                  className="downArrow-button"
                  style={{
                    backgroundColor: downArrowHover ? "lightblue" : "initial",
                    cursor: "pointer",
                    color: downArrowHover ? "black" : "azure",
                  }}
                  onMouseEnter={() => setDownArrowHover(true)}
                  onMouseLeave={() => setDownArrowHover(false)}
                >
                  <FaArrowDownLong />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "green",
              }}
            >
              {" "}
            </div>
            <div
              style={{
                backgroundColor: "black",
              }}
            >
              {" "}
            </div>
          </div>
          <div className="content-list">List Items</div>
          <div className="content-two">Content 2 </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
};

export default App;
