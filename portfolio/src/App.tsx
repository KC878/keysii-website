import "./styles/index.css";
import Header from "./components/Header";
import { useState } from "react";
import type { HeaderItems } from "./types/types"; // explicityly define type
import { logos } from "./constants/logos";

const App = () => {
  const [headerItems] = useState<HeaderItems[]>([
    { id: "home", title: "HOME" },
    { id: "about", title: "ABOUT" },
    { id: "portfolio", title: "PORTFOLIO" },
    { id: "service", title: "SERVICE" },
    { id: "pages", title: "PAGES" },
    { id: "contact", title: "CONTACT" },
  ]);

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
        <div className="content">Content</div>
        <div className="sidebar">Sidebar</div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
};

export default App;
