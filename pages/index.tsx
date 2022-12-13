import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, setUser } = useAuth();

  const onClickHandler = () => {
    setUser("User saved!");
  };

  return (
    <div className={styles.container}>
      <h2>{user}</h2>
      <button onClick={onClickHandler}>Login</button>
    </div>
  );
}
