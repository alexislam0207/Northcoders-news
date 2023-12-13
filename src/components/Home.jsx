import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/User";
import { getAllUsers } from "../api";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function handleClick(e) {
    setUser(e.target.value);
  }

  return (
    <>
      <p>Hello{user ? ` ${user}` : null}!</p>
      <p>Please select an avatar to continue</p>
      {users.map((user) => {
        return (
          <div key={user.username}>
            <p>{user.username}</p>
            <p>Full name: {user.name}</p>
            <img src={user.avatar_url} alt="user" />
            <button value={user.username} onClick={handleClick}>
              choose me!
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Home;
