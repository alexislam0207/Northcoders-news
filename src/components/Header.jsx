import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/User";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <Link to="/">
      <header>
        <h1>Northcoders news</h1>
        <p id="header_note">{user ? `you are logged in as${user}` : "Select an avatar"}</p>
      </header>
    </Link>
  );
};

export default Header;
