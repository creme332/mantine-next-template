import LoginForm from "@/components/LoginForm";
import Game from "./game";
export default function Home({ loggedIn, validateLogin }) {
  if (!loggedIn) return <LoginForm validateLogin={validateLogin} />;
  return <Game loggedIn={loggedIn} />;
}
