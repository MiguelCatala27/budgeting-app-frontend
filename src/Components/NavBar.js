import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="Nav-Bar">
       <nav>
      <NavLink to="/">
        <div className="view-account">Budget App</div>
      </NavLink>
      <NavLink to="/transactions/new">
        <div className="new-transaction-link">New Transaction</div>
      </NavLink>
    </nav>
    </div>
  );
};

export default NavBar;