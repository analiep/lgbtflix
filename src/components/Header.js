// src/components/Header.js

import React from 'react';
import '../styles/Header.css'; // Importando o arquivo de estilos

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        LGBTFlix
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/novo-video">Novo Vídeo</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
