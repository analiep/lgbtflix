import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ video, handleClose }) => {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image);
  const [videoUrl, setVideoUrl] = useState(video.video);
  const [description, setDescription] = useState(video.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedVideo = { title, category, image, video: videoUrl, description };
    axios.put(`http://localhost:3000/videos/${video.id}`, updatedVideo)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>×</span>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />

          <label htmlFor="category">Categoria:</label>
          <select id="category" name="category" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Inovação">Inovação</option>
            <option value="Gestão">Gestão</option>
          </select>

          <label htmlFor="image">Imagem URL:</label>
          <input type="text" id="image" name="image" value={image} onChange={e => setImage(e.target.value)} />

          <label htmlFor="video">Vídeo URL:</label>
          <input type="text" id="video" name="video" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />

          <label htmlFor="description">Descrição:</label>
          <textarea id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} />

          <div className="modal-buttons">
            <button type="submit" className="save-button">Salvar</button>
            <button type="button" onClick={handleClose} className="close-button">Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
