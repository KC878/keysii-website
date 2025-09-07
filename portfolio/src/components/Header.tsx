import type { HeaderItems } from "../types/types";

interface HeaderProps {
  headerItems: HeaderItems[];
}
const Header: React.FC<HeaderProps> = ({ headerItems }) => {
  return (
    <>
      {headerItems?.map((item) => (
        <a href="" id={item.id} style={{ color: "#eeeeee" }}>
          {item.title}
        </a>
      ))}
    </>
  );
};

export default Header;
