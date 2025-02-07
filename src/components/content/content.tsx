import React from "react";
import "./Content.css";
import videoImage from "../../assets/image.png"; // Ensure the correct path

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <div className="categories">
        <button className="category-btn">All</button>
        <button className="category-btn">Music</button>
        <button className="category-btn">Shorts</button>
        <button className="category-btn">Live</button>
        <button className="category-btn">Gaming</button>
        <button className="category-btn">Trending</button>
        <button className="category-btn">Subscription</button>
        <button className="category-btn">SonyLiv</button>
        <button className="category-btn">Tsx Gaming</button>
        <button className="category-btn">Bgmi Live</button>
        <button className="category-btn">MTV</button>
      </div>
      <div className="videos-grid">
        {Array(50).fill(0).map((_, index) => (
          <div key={index} className="video-card">
            {/* Added the video image */}
            <div className="thumbnail">
              <img src={videoImage} alt="Video Thumbnail" />
            </div>
            <div className="video-info">
              {/* Added an image icon in the channel icon */}
              <div className="channel-icon">
                <img src={videoImage} alt="Channel Icon" />
              </div>
              <div className="video-text">
                <h4>Danyal Zafar AKA Danny Zee - Sajna Ve [Lyrical Visualizer] {index + 1}</h4>
                <p>Danny Zee</p>
                <p>297k views</p>
                <p>2 years ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
