import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, category, image, video, description });
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
          <option value="">Selecione</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="inovacao">Inovação</option>
          <option value="gestao">Gestão</option>
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
      <button type="reset" onClick={() => {setTitle(''); setCategory(''); setImage(''); setVideo(''); setDescription('');}}>Limpar</button>
    </form>
  );
};

export default Form;
