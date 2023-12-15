import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getAllUsers } from "../../api";
import "./Home.css"

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  function handleClick(e) {
    setUser(e.target.value);
  }

  return (
    <div id="home">
      {user ?<p id="home_title">Hello {user}!</p> : null}
      <p id="home_subtitle">Welcome to Northcoders news where you can check out articles posted by fellow Northcoders.
      <br/>Please select an user profile below If you wish to comment on an article.
      <br/>{user ? `*you are logged in as ${user}` :null}</p>
      {loading ? <p>loading</p> : null}<div id="user_list">
      {users.map((user) => {
        return (
          <div key={user.username} className="user">
            <p className="username">{user.username}</p>
            <p className="name">Full name: {user.name}</p>
            <img className="user_pics" src={user.avatar_url} alt="user" /><br/>
            <button className="user_btn" value={user.username} onClick={handleClick}>
              choose me!
            </button>
          </div>
        );
      })}</div>
    </div>
  );
};

export default Home;
