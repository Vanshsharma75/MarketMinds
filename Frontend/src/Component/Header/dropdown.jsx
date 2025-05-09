import { useState, useEffect, useRef } from "react";
import "./dropdown.css"; // Import your CSS file for styling

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="Pages-dropdown" ref={dropdownRef}>
      <dropdown
        className="Pages-dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        Pages
      </dropdown>
      <ul
        className={`dropdown-menu ${
          isDropdownOpen ? "dropdown-menu-enter-active" : "dropdown-menu-enter"
        }`}
      >
        <li>
          <a
            href="https://us-marketminds.marketmindsdigitalsolutions.com/"
            className="us-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            US Website
          </a>
        </li>
        <li>
          <a
            href="https://germany.marketmindsdigitalsolutions.com"
            className="germany-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Germany Website – Coming soon</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default Dropdown;
