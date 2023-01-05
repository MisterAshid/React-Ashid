import Logo from "./logo/logo";
import List from "./list/list";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <List />
    </div>
  );
};

export default Header;
