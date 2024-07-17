import React from 'react';

const Category = ({ title, videos }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="videos">
        {videos.map(video => (
          <div key={video.id} className="card">
            <img src={video.image} alt={video.title} />
            <p>{video.title}</p>
            <button onClick={() => handleEdit(video.id)}>Editar</button>
            <button onClick={() => handleDelete(video.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
