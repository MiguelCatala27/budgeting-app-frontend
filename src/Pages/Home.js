import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="Home">
      <h2>Welcome to the Budget App</h2>
      <Link to="/transactions">
        <button>Login</button>
      </Link>
    </div>
  );
};
export default Home;