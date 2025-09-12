import "./styles/index.css";
import "./styles/contentOneLeft.css";
import "./styles/contentOneCenter.css";
import "./styles/contentOneRight.css";

import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import type {
  HeaderItems,
  ClassText,
  CardItems,
  IconsType,
} from "./types/types"; // explicityly define type

import { logos } from "./constants/logos";
import { images } from "./constants/images";

import { MdCallMade } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import Card from "./components/Card";

import { FaLaptopCode, FaDatabase, FaHandsHelping } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineBugReport } from "react-icons/md";
import { RiMenuUnfold3Line, RiMenuUnfold4Fill } from "react-icons/ri";
import Test from "./components/testComponents/Test";

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   alert("Content is protected");
// }); // prevents right click to inspect element
// attach some kin of logic here like a notif to say content is protected

const App = () => {
  // mobile size dynamic
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isTab, setIsTab] = useState(window.innerWidth <= 923);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTab(window.innerWidth <= 923);
      console.log("Current Width: ", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const socialMedia: IconsType[] = [
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
    height: "1.875rem",
    width: isTab ? "clamp(3rem, 6vw, 10rem)" : "clamp(6rem, 10vw, 12rem)",
    borderRadius: "10px",
    cursor: "pointer",
    textDecoration: "none",
    flexShrink: 1,
    fontSize: "clamp(0.5rem, 1.6vw, 1.5rem)",
  };

  // socialMedia Items style
  const socialMediaStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    padding: "0.4375",
    borderRadius: "10px",
  };

  // Card Properties

  const cardProps: CardItems[] = [
    {
      id: 1,
      title: "Full-Stack Development",
      disc: "I build responsive and scalable applications using React.js for the frontend, Node.js for the backend, and PostgreSQL for data management. This includes creating APIs, integrating databases, and ensuring smooth communication between system components.",
      icon: FaLaptopCode,
    },
    {
      id: 2,
      title: "System Documentation",
      disc: "I create clear and structured documentation such as user manuals, technical reports, and system guides. This ensures that both technical teams and end-users can understand and use the system effectively.",
      icon: AiOutlineFileText,
    },
    {
      id: 3,
      title: "Quality Assurance &Testing",
      disc: "I conduct manual and functional testing to ensure that applications work reliably and meet requirements. My focus is on detecting bugs early, improving performance, and ensuring system stability before deployment.",
      icon: MdOutlineBugReport,
    },
    {
      id: 4,
      title: "Database Design",
      disc: "I design efficient and organized databases, including Entity Relationship Diagrams (ERDs), schemas, and normalization. I focus on building databases that are optimized for performance, scalability, and easy integration with applications.",
      icon: FaDatabase,
    },
    {
      id: 5,
      title: "Project Assistance",
      disc: "I provide support in both academic and business IT projects, including research, development, and documentation. This service covers collaboration, technical support, and ensuring projects meet deadlines and requirements.",
      icon: FaHandsHelping,
    },
  ];

  const [hireMeHover, setHireMeHover] = useState<boolean>(false);
  const [downArrowHover, setDownArrowHover] = useState<boolean>(false);

  const [logoHover, setLogoHover] = useState<boolean>(false);
  const [startNowHover, setStartNowHover] = useState<boolean>(false);
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
          {isMobile ? (
            <div
              style={{
                marginLeft: "5%",
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => {
                alert("display-drawer");
              }}
            >
              <RiMenuUnfold3Line color="white" size={30} />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                gap: "1rem",
              }}
              className="header-child-container"
            >
              {/* Logo */}
              <img
                loading="lazy"
                alt="logo"
                src={logos.mainLogo}
                style={{
                  width: "5vw",
                  height: "auto", //
                  objectFit: "contain",
                  borderRadius: "50%",
                  marginLeft: "3.125rem",
                  cursor: "pointer",
                  flexShrink: 1,
                  transition: "background 0.3s",
                  transform: logoHover ? "scale(1.5)" : "scale(1)",
                }}
                onMouseEnter={() => setLogoHover(true)}
                onMouseLeave={() => setLogoHover(false)}
              />

              {/* HeaderItems */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexGrow: 10,
                  gap: "1.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginLeft: "7.5rem",
                  flexShrink: 1,
                }}
              >
                <Header headerItems={headerItems} baseStyle={headerBaseStyle} />
              </div>

              {/* Something Button To add */}
              <div
                style={{
                  display: "flex",
                  flexGrow: 1,
                  // backgroundColor: "blue",
                  justifyContent: "end",
                  alignContent: "center",
                  marginRight: "5%",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.3125rem",
                    fontFamily: "Montserrat",
                    fontWeight: "4",
                    borderRadius: "15px",
                    cursor: "pointer",
                    flexShrink: 1,
                    color: startNowHover ? "white" : "initial",
                    backgroundColor: startNowHover ? "#39FF14" : "#ced2d7",
                    boxShadow: startNowHover
                      ? "0 0 10px #32CD32, 0 0 20px rgba(50, 205, 50, 0.6)"
                      : "none",
                    transition: "background 0.3s",
                    transform: startNowHover ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={() => setStartNowHover(true)}
                  onMouseLeave={() => setStartNowHover(false)}
                  onClick={() => alert("Create a Form Request")}
                >
                  {!isTab && <p>START NOW</p>}
                  {<HiRocketLaunch size={isTab ? 30 : 20} />}
                </button>
              </div>
            </div>
          )}
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

                    boxShadow: hireMeHover
                      ? "0 0 10px rgb(245, 244, 244), 0 0 20px #39FF14"
                      : "none",
                    transition: "background 0.3s",
                    transform: hireMeHover ? "scale(1.1)" : "scale(1)",
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
                <img
                  className="image-person"
                  src={images.person}
                  loading="lazy"
                  alt="Keysii"
                />
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

          {/* services offered */}
          <div className="content-list">
            <h1 style={{ color: "lightgray" }}>Services Offered</h1>
            <Card cardProps={cardProps} />
          </div>
          <div className="content-two">
            <Test />
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
};

export default App;
