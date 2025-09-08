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
