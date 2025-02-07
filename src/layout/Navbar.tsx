import React, { useState } from "react";
import "./Navbar.css";
import { FaBell, FaUpload, FaUser, FaYoutube, FaSearch, FaTimes, FaVolumeUp } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission on Enter key press
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Handle search functionality here
    }
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <FaYoutube className="icon youtube-logo" />
        <span>YouTube</span>
      </div>

      {/* Middle Section - Search Box */}
      <div className="nav-middle">
        <div className={`search-box ${searchQuery ? "active" : ""}`}>
          {searchQuery && <FaSearch className="search-icon-left" />}
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e)=>handleSearch(e)}
           
          />
          {searchQuery && <FaTimes className="clear-icon" onClick={clearSearch} />}
          <button className="search-btn" onClick={handleSearchSubmit}>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <FaVolumeUp className="icon" />
        <FaUpload className="icon" />
        <FaBell className="icon" />
        <FaUser className="icon user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
