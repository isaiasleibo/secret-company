import React from 'react';
import './verTodos.css';
import { Link } from 'react-router-dom';

export const VerTodos = () => {
  return (
    <div id="verTodos">
        <button>
          <Link to='/productos/'>Ver Todos</Link>
        </button>
    </div>
  )
}
