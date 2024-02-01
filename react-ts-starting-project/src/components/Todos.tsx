import React from 'react';

const Todos: React.FC<{ type: string[] }> = (params) => {
  return (
    <ul>
      {params.type.map((value, key) => (
        <li key={key}>{value}</li>
      ))}
    </ul>
  );
};

export default Todos;
