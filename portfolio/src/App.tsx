import "./styles/index.css";
import "./styles/contentOneLeft.css";
import "./styles/contentOneCenter.css";
import "./styles/contentOneRight.css";

import Header from "./components/Header";
import React, { useState } from "react";
import type { HeaderItems, ClassText } from "./types/types"; // explicityly define type
import type { IconType } from "react-icons";

import { logos } from "./constants/logos";

import { MdCallMade } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const App = () => {
  const links = {
    portfolioLink: new URL(
      "https://flannel-egg-5a1.notion.site/Kent-Christian-E-Cagadas-Portfolio-246290f7e7248031a0eee3ab0b4d7bb9"
    ),
  };

  const [headerItems] = useState<HeaderItems[]>([
    {
      id: "home",
      title: "HOME",
    },
    { id: "about", title: "ABOUT" },
    { id: "portfolio", title: "PORTFOLIO", link: links.portfolioLink },
    { id: "service", title: "SERVICE" },
    { id: "pages", title: "PAGES" },
    { id: "contact", title: "CONTACT" },
  ]);

  type SocialType = {
    icon: IconType;
    href: string;
  };
  const socialMedia: SocialType[] = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/kent-christian-cagadas-0985a1350/",
    },
    {
      icon: FaGithub,
      href: "https://github.com/KC878",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/kentchristian.sagadac",
    },
    {
      icon: FaInstagram,
      href: "",
    },
  ];

  // inLine Styles //

  // headerItems Style Prop
  const headerBaseStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    width: "100px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  // socialMedia Items style
  const socialMediaStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    padding: "7px",
    borderRadius: "10px",
  };

  const [hireMeHover, setHireMeHover] = useState<boolean>(false);
  const [downArrowHover, setDownArrowHover] = useState<boolean>(false);

  const [logoHover, setLogoHover] = useState<boolean>(false);
  const [somethingHover, setSomethingHover] = useState<boolean>(false);
  const [socialItemsHover, setSocialItemsHover] = useState<string>("");

  const leftSideTextContent: ClassText[] = [
    { class: "textOne", text: "Welcome To my World" },
    { class: "textTwo", text: "Hello, I am" },
    { class: "textThree", text: "Kent Christian E. Cagadas" },
    { class: "textFour", text: "Full Stack Developer / Data Analyst" },
    {
      class: "textFive",
      text: "Who says there are no shortcut in life? When I literally invented one.",
    },
  ];

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
                backgroundColor: logoHover ? "skyblue" : "initial",
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
              <Header headerItems={headerItems} baseStyle={headerBaseStyle} />
            </div>

            {/* Something Button To add */}
            <div
              style={{
                flexGrow: 1,
                // backgroundColor: "blue",
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
              {leftSideTextContent.map((item) => (
                <div className={item.class}>{item.text}</div>
              ))}

              <div className="textSix">
                <div
                  className="hireMe-button"
                  style={{
                    borderStyle: hireMeHover ? "inset" : "outset",
                    backgroundColor: hireMeHover ? "lightblue" : "#ced2d7",
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

            {/* contentCenter */}
            <div>
              <div className="centerContentOne-container">
                <img className="image-person" src="../../public/person.png" />
              </div>
            </div>

            {/* SocialMedias */}
            <div className="rightContentOne-container">
              {socialMedia.map((Icon, item) => (
                <a
                  id={item.toString()}
                  href={Icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...socialMediaStyle,
                    backgroundColor:
                      socialItemsHover === item.toString()
                        ? "#2a2a2a"
                        : "initial",
                  }}
                  onMouseEnter={() => setSocialItemsHover(item.toString())}
                  onMouseLeave={() => setSocialItemsHover("")}
                >
                  <Icon.icon key={item} className="social-icons" />
                </a>
              ))}
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
