import { useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="nav-toggle" onClick={handleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <ul>
              {links.map((link) => {
                const { url, text, id } = link;
                return (
                  <li className="links" key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
