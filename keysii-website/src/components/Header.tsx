import { useState } from "react";
import type { HeaderProps } from "../interfaces/interfaces";

const Header: React.FC<HeaderProps> = ({ headerItems, baseStyle }) => {
  const [hover, setHover] = useState<string>("");
  return (
    <>
      {headerItems?.map((item) => (
        <a
          href={item.link?.toString()}
          target="_blank"
          id={item.id}
          style={{
            ...baseStyle,
            backgroundColor: hover === item.id ? "#ced2d7" : "initial",
            color: hover === item.id ? "black" : "#eeeeee",
            boxShadow:
              hover === item.id
                ? "0 0 10px rgb(245, 244, 244), 0 0 20px #39FF14"
                : "none",
            transition: "background 0.3s",
            transform: hover === item.id ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => {
            setHover(item.id);
          }}
          onMouseLeave={() => setHover("")}
        >
          {item.title}
        </a>
      ))}
    </>
  );
};

export default Header;
