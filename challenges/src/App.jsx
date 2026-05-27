import { useState } from "react";
/* Challenge 1: Ternary operator ile kullanıcı kartı (Orta seviye)
Bir UserProfile component'i yaz:

Props: isLoggedIn (boolean) ve username (string)
isLoggedIn true ise: "Hoş geldin, {username}!" ve bir logout butonu göster
isLoggedIn false ise: "Giriş yap" yazısı ve bir login butonu göster */

export default function App() {
/*   function handleClick(type, target) {
    console.log(target)
    console.log(type)
  } */

  return (
    <Focus />
  );
}

import { useRef } from "react";

function Focus (){
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};



/* function Button({handleClick}) {
  return <button onClick={handleClick}>Click Me</button>;
}
 */

/* function UserProfile({ isLoggedIn, username }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Hoş geldin, {username}!</p>
          <button onClick={handleLogin}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Giriş yap</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
} */

/* Challenge 2: && operatörü ile bildirim (Kolay)
Bir Notification component'i yaz:

Props: hasMessage (boolean) ve message (string)
Message varsa göster, yoksa hiç gösterme */
 

/* function TodoAppWithFilter() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React öğren', completed: false },
    { id: 2, text: 'Proje yap', completed: true }
  ]);
  const [nextId, setNextId] = useState(3);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = { id: nextId, text: input, completed: false };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Filter yap
  let filteredTodos = todos;
  if (filter === 'completed') {
    filteredTodos = todos.filter(t => t.completed);
  } else if (filter === 'pending') {
    filteredTodos = todos.filter(t => !t.completed);
  }

  return (
    <div>
      <h2>Todo Listesi</h2>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Yeni todo gir"
      />
      <button onClick={addTodo}>Ekle</button>

      <div>
        <button onClick={() => setFilter('all')}>Tümü</button>
        <button onClick={() => setFilter('pending')}>Bekleyenler</button>
        <button onClick={() => setFilter('completed')}>Tamamlananlar</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 */
