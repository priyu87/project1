import { useState } from 'react';

export default function App() {
  const [text, setText] = useState(""); 
  const [todos, setTodos] = useState([]);

  console.log('current todos', todos);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    if (text.trim() === "") return; 
    setTodos((old) => {
      console.log('old', old);
      return [...old, text];
    });
    setText("");
  }

  function handleDelete(index) {
    setTodos((old) => {
      const newTodos = [...old]; 
      newTodos.splice(index, 1); 
      return newTodos;
    });
  }

  return (
    <div style={{ backgroundColor: 'aqua', minHeight: '100vh', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input 
          value={text} 
          onChange={handleChange} 
          type="text" 
          placeholder="Enter text" 
          style={{
            padding: '10px',
            width: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px'
          }} 
        />
        <button 
          onClick={handleClick} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add Todo
        </button>
      </div>

      {todos.length > 0 ? (
        todos.map((e, index) => (
          <div key={index} style={{ textAlign: 'center', marginBottom: '10px' }}>
            <span 
              style={{
                display: 'inline-block',
                backgroundColor: 'black',
                padding: '10px',
                borderRadius: '5px',
                marginRight: '10px',
                maxWidth: '200px',
                wordWrap: 'break-word'
              }}
            >
              {e}
            </span>
            <button 
              onClick={() => handleDelete(index)} 
              style={{
                padding: '5px 10px',
                backgroundColor: '#ff6347',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>No Todos Added</div>
      )}
    </div>
  );
} 