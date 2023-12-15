import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/User";
import { getAllUsers } from "../api";

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
      <p>Hello{user ? ` ${user}` : null}!</p>
      <p>Please select an avatar below</p>
      {loading?<p>loading</p>:null}
      {users.map((user) => {
        return (
          <div key={user.username} className="user">
            <p>{user.username}</p>
            <p>Full name: {user.name}</p>
            <img src={user.avatar_url} alt="user" />
            <button value={user.username} onClick={handleClick}>
              choose me!
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
