// CategorySection.js

import React from 'react';
import VideoCard from './VideoCard'; // Importe o componente VideoCard
import '../styles/CategorySection.css'; // Importe o arquivo de estilo do CategorySection

const CategorySection = ({ category, videos }) => {
  return (
    <div className="category-section">
      <h2 className="category-title">{category}</h2>
      <div className="video-cards">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
