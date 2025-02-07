import React from "react";
import "./Sidebar.css";
import {
  FaBook,
  FaFilm,
  FaHistory,
  FaHome,
  FaPlay,
  FaStream,
  FaMusic,
  FaShoppingBag,
  FaPodcast,
  FaRegThumbsUp,
} from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { FaLaptop } from "react-icons/fa6";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="short-sidebar">
        <ul className="short-sidebar-menu">
          <li>
            <FaHome className="icon" /> Home
          </li>
          <li>
            <FaPlay className="icon" /> Subscriptions
          </li>
          <li>
            <FaStream className="icon" /> Shorts
          </li>
        </ul>
      </div>
      <hr />
      <div className="middle">
        <h3>You</h3>
        <ul className="middle-menu">
          <li>
            <FaHistory className="icon" /> History
          </li>
          <li>
            <MdFeaturedPlayList className="icon" /> Playlists
          </li>
          <li>
            <FaLaptop className="icon" /> Your Videos
          </li>
          <li>
            <FaHistory className="icon" /> Watch Later
          </li>
          <li>
            <FaRegThumbsUp className="icon" /> Liked Videos
          </li>
        </ul>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Explore</h3>
        <ul className="subscribed-menu">
          <li>
            <FaMusic className="icon" /> Music
          </li>
          <li>
            <FaShoppingBag className="icon" /> Shopping
          </li>
          <li>
            <FaBook className="icon" /> Courses
          </li>
          <li>
            <FaPodcast className="icon" /> Podcast
          </li>
          <li>
            <FaFilm className="icon" /> Films
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
