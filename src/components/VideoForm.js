import React, { useState } from 'react';

const VideoForm = ({ initialData, onSave, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Categoria:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Inovação">Inovação</option>
          <option value="Gestão">Gestão</option>
        </select>
      </label>
      <label>
        Imagem:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Vídeo:
        <input
          type="text"
          name="video"
          value={formData.video}
          onChange={handleChange}
        />
      </label>
      <label>
        Descrição:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Salvar</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </form>
  );
};

export default VideoForm;
