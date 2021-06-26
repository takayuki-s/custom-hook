import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "てけ",
  email: "123@aaa.com",
  address: "ADRESS"
};
export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
