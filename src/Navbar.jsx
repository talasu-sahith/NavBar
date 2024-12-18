import { useRef, useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const handleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
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

        <div
          className="links-container"
          style={linkStyles}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, text, id } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
