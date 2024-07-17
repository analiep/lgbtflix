import React, { useState } from 'react';
import axios from 'axios';

function NewVideo() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { title, category, image, video, description };
    axios.post('http://localhost:3000/videos', newVideo)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Categoria:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Inovação">Inovação</option>
          <option value="Gestão">Gestão</option>
        </select>
      </label>
      <label>
        Imagem:
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
      </label>
      <label>
        Vídeo:
        <input type="text" value={video} onChange={e => setVideo(e.target.value)} />
      </label>
      <label>
        Descrição:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default NewVideo;
