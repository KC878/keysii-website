// import "./styles/index.css";
// import "./styles/contentOneLeft.css";
// import "./styles/contentOneCenter.css";
// import "./styles/contentOneRight.css";

// import Header from "./components/Header";
// import React, { useEffect, useState } from "react";
// import type {
//   HeaderItems,
//   ClassText,
//   CardItems,
//   IconsType,
// } from "./types/types";

// import { logos } from "./constants/logos";
// import { images } from "./constants/images";

// import { MdCallMade } from "react-icons/md";
// import { FaArrowDownLong } from "react-icons/fa6";
// import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
// import { HiRocketLaunch } from "react-icons/hi2";
// import Card from "./components/Card";

// import { FaLaptopCode, FaDatabase, FaHandsHelping } from "react-icons/fa";
// import { AiOutlineFileText } from "react-icons/ai";
// import { MdOutlineBugReport } from "react-icons/md";
// import Test from "./components/Test";

// const App = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const links = {
//     portfolioLink: new URL(
//       "https://flannel-egg-5a1.notion.site/Kent-Christian-E-Cagadas-Portfolio-246290f7e7248031a0eee3ab0b4d7bb9"
//     ),
//   };

//   const [headerItems] = useState<HeaderItems[]>([
//     { id: "home", title: "HOME" },
//     { id: "about", title: "ABOUT" },
//     { id: "portfolio", title: "PORTFOLIO", link: links.portfolioLink },
//     { id: "service", title: "SERVICE" },
//     { id: "pages", title: "PAGES" },
//     { id: "contact", title: "CONTACT" },
//   ]);

//   const socialMedia: IconsType[] = [
//     {
//       icon: FaLinkedin,
//       href: "https://www.linkedin.com/in/kent-christian-cagadas-0985a1350/",
//     },
//     { icon: FaGithub, href: "https://github.com/KC878" },
//     {
//       icon: FaFacebook,
//       href: "https://www.facebook.com/kentchristian.sagadac",
//     },
//     { icon: FaInstagram, href: "" },
//   ];

//   // headerItems Style Prop
//   const headerBaseStyle: React.CSSProperties = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "2rem",
//     minWidth: "5rem",
//     borderRadius: "0.5rem",
//     cursor: "pointer",
//     textDecoration: "none",
//     fontSize: "clamp(0.8rem, 1vw, 1rem)",
//   };

//   const socialMediaStyle: React.CSSProperties = {
//     display: "flex",
//     justifyContent: "center",
//     padding: "0.5rem",
//     borderRadius: "0.5rem",
//   };

//   const cardProps: CardItems[] = [
//     {
//       id: 1,
//       title: "Full-Stack Development",
//       disc: "I build responsive and scalable applications using React.js for the frontend, Node.js for the backend, and PostgreSQL for data management.",
//       icon: FaLaptopCode,
//     },
//     {
//       id: 2,
//       title: "System Documentation",
//       disc: "I create clear and structured documentation such as user manuals, technical reports, and system guides.",
//       icon: AiOutlineFileText,
//     },
//     {
//       id: 3,
//       title: "Quality Assurance &Testing",
//       disc: "I conduct manual and functional testing to ensure that applications work reliably and meet requirements.",
//       icon: MdOutlineBugReport,
//     },
//     {
//       id: 4,
//       title: "Database Design",
//       disc: "I design efficient and organized databases, including Entity Relationship Diagrams (ERDs), schemas, and normalization.",
//       icon: FaDatabase,
//     },
//     {
//       id: 5,
//       title: "Project Assistance",
//       disc: "I provide support in both academic and business IT projects, including research, development, and documentation.",
//       icon: FaHandsHelping,
//     },
//   ];

//   const [hireMeHover, setHireMeHover] = useState(false);
//   const [downArrowHover, setDownArrowHover] = useState(false);
//   const [logoHover, setLogoHover] = useState(false);
//   const [startNowHover, setStartNowHover] = useState(false);
//   const [socialItemsHover, setSocialItemsHover] = useState("");

//   const leftSideTextContent: ClassText[] = [
//     { class: "textOne", text: "Welcome To my World" },
//     { class: "textTwo", text: "Hello, I am" },
//     { class: "textThree", text: "Kent Christian E. Cagadas" },
//     { class: "textFour", text: "Full Stack Developer / Data Analyst" },
//     {
//       class: "textFive",
//       text: "Who says there are no shortcut in life? When I literally invented one.",
//     },
//   ];

//   return (
//     <>
//       <div className="main-container">
//         {/* Header */}
//         <div className="header">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: isMobile ? "column" : "row",
//               gap: isMobile ? "0.5rem" : "1rem",
//               justifyContent: isMobile ? "space-between" : "center",
//               alignItems: "center",
//               padding: "clamp(0.5rem, 2vw, 1rem)",
//             }}
//             className="header-child-container"
//           >
//             {/* Logo */}
//             <img
//               loading="lazy"
//               alt="logo"
//               src={logos.mainLogo}
//               style={{
//                 width: isMobile ? "3rem" : "4rem",
//                 height: "auto",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 cursor: "pointer",
//                 transition: "transform 0.3s",
//                 transform: logoHover ? "scale(1.2)" : "scale(1)",
//               }}
//               onMouseEnter={() => setLogoHover(true)}
//               onMouseLeave={() => setLogoHover(false)}
//             />

//             {/* HeaderItems */}
//             <div
//               style={{
//                 display: isMobile ? "none" : "flex",
//                 flexDirection: "row",
//                 flexGrow: 1,
//                 gap: "clamp(0.5rem, 2vw, 2rem)",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Header headerItems={headerItems} baseStyle={headerBaseStyle} />
//             </div>

//             {/* CTA Button */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: isMobile ? "center" : "flex-end",
//                 width: isMobile ? "100%" : "auto",
//               }}
//             >
//               <button
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.5rem",
//                   fontFamily: "Montserrat",
//                   fontSize: "clamp(0.8rem, 1vw, 1rem)",
//                   borderRadius: "1rem",
//                   cursor: "pointer",
//                   padding: "0.5rem 1rem",
//                   color: startNowHover ? "white" : "black",
//                   backgroundColor: startNowHover ? "#39FF14" : "#ced2d7",
//                   boxShadow: startNowHover
//                     ? "0 0 10px #32CD32, 0 0 20px rgba(50, 205, 50, 0.6)"
//                     : "none",
//                   transition: "all 0.3s",
//                   transform: startNowHover ? "scale(1.05)" : "scale(1)",
//                 }}
//                 onMouseEnter={() => setStartNowHover(true)}
//                 onMouseLeave={() => setStartNowHover(false)}
//               >
//                 <p>START NOW</p>
//                 <HiRocketLaunch size={20} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="content">
//           <div
//             className="content-one"
//             style={{
//               display: "grid",
//               gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
//               alignItems: "center",
//               gap: "1rem",
//               padding: "clamp(1rem, 3vw, 2rem)",
//             }}
//           >
//             {/* Left */}
//             <div className="leftContentOne-container">
//               {leftSideTextContent.map((item, idx) => (
//                 <div key={idx} className={item.class}>
//                   {item.text}
//                 </div>
//               ))}

//               <div className="textSix">
//                 <div
//                   className="hireMe-button"
//                   style={{
//                     border: "1px solid #ccc",
//                     padding: "0.5rem 1rem",
//                     borderRadius: "0.5rem",
//                     backgroundColor: hireMeHover ? "lightblue" : "#ced2d7",
//                     boxShadow: hireMeHover
//                       ? "0 0 10px rgba(245, 244, 244, 0.8), 0 0 20px #39FF14"
//                       : "none",
//                     transform: hireMeHover ? "scale(1.05)" : "scale(1)",
//                     cursor: "pointer",
//                     transition: "all 0.3s",
//                   }}
//                   onMouseEnter={() => setHireMeHover(true)}
//                   onMouseLeave={() => setHireMeHover(false)}
//                 >
//                   <div>Hire Me</div>
//                   <MdCallMade />
//                 </div>
//               </div>

//               <div className="TextSeven">
//                 <div
//                   className="downArrow-button"
//                   style={{
//                     backgroundColor: downArrowHover
//                       ? "lightblue"
//                       : "transparent",
//                     cursor: "pointer",
//                     color: downArrowHover ? "black" : "azure",
//                     transition: "color 0.3s, background 0.3s",
//                   }}
//                   onMouseEnter={() => setDownArrowHover(true)}
//                   onMouseLeave={() => setDownArrowHover(false)}
//                 >
//                   <FaArrowDownLong />
//                 </div>
//               </div>
//             </div>

//             {/* Center */}
//             <div
//               className="centerContentOne-container"
//               style={{ textAlign: "center" }}
//             >
//               <img
//                 className="image-person"
//                 src={images.person}
//                 loading="lazy"
//                 alt="Keysii"
//                 style={{
//                   maxWidth: "100%",
//                   height: "auto",
//                   borderRadius: "1rem",
//                 }}
//               />
//             </div>

//             {/* Right */}
//             <div
//               className="rightContentOne-container"
//               style={{ textAlign: "center" }}
//             >
//               {socialMedia.map((Icon, idx) => (
//                 <a
//                   key={idx}
//                   href={Icon.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     ...socialMediaStyle,
//                     backgroundColor:
//                       socialItemsHover === idx.toString()
//                         ? "#2a2a2a"
//                         : "transparent",
//                     transition: "background 0.3s",
//                   }}
//                   onMouseEnter={() => setSocialItemsHover(idx.toString())}
//                   onMouseLeave={() => setSocialItemsHover("")}
//                 >
//                   <Icon.icon className="social-icons" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div
//             className="content-list"
//             style={{ padding: "clamp(1rem, 3vw, 2rem)" }}
//           >
//             <h1
//               style={{
//                 color: "lightgray",
//                 fontSize: "clamp(1.2rem, 2vw, 2rem)",
//               }}
//             >
//               Services Offered
//             </h1>
//             <Card cardProps={cardProps} />
//           </div>

//           <div className="content-two">
//             <Test />
//           </div>
//         </div>

//         {/* Footer */}
//         <div
//           className="footer"
//           style={{ padding: "1rem", textAlign: "center" }}
//         >
//           Footer
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
