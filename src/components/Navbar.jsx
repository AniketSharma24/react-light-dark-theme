import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="theme-switch">
        Theme: {theme.toUpperCase()}
        <label class="switch">
          <input
            onChange={toggleTheme}
            checked={theme === "dark"}
            type="checkbox"
          />
          <span class="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
