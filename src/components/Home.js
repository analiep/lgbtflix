import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import '../styles/Home.css';


const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos');
      if (!response.ok) {
        throw new Error('Erro ao buscar os vídeos');
      }
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="home">
      <h2 className="category-title">Frontend</h2>
      <div className="video-list">
        {videos
          .filter(video => video.category === 'Frontend')
          .map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
      </div>

      <h2 className="category-title">Backend</h2>
      <div className="video-list">
        {videos
          .filter(video => video.category === 'Backend')
          .map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
      </div>

      <h2 className="category-title">Inovação</h2>
      <div className="video-list">
        {videos
          .filter(video => video.category === 'Inovação')
          .map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
      </div>

      <h2 className="category-title">Gestão</h2>
      <div className="video-list">
        {videos
          .filter(video => video.category === 'Gestão')
          .map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
      </div>
    </div>
  );
}

export default Home;
