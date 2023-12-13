import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/User";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Link to="/">
        <header>Northcoders news</header>
      </Link>
      <p>{user ? `you are logged in as${user}` : "Please select an avatar on Home page"

}</p>
    </>
  );
};

export default Header;
