// ./components/VideoCard.js
import React from 'react';
import axios from 'axios';

function VideoCard({ video, onEdit, onDelete }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/videos/${video.id}`)
      .then(response => {
        console.log(response.data);
        onDelete(video.id);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button onClick={() => onEdit(video)}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
}

export default VideoCard;
