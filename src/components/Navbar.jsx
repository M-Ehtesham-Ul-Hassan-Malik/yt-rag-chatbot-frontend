import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YouTube RAG Chatbot</div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/chatbot" className="nav-link">
          Chatbot
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
