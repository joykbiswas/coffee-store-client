import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="space-x-4">
      <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/addCoffee">
          <button className="btn">Add Coffee</button>
        </Link>
        <Link to="/signup">
        <button className="btn">Sign Up</button>
        </Link>
        <NavLink to='/users'>
        <button className="btn">Users</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
