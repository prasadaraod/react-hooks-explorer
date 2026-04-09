import { useReducer, useState } from 'react';

// 1. Define the possible actions
const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

// 2. The Reducer Function: Logic lives here, outside the component
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const UseReducerPage = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>useReducer Hook</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="What needs to be done?"
        />
      </form>

      <div style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <div key={todo.id} style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
            <span style={{ color: todo.complete ? '#AAA' : '#000', textDecoration: todo.complete ? 'line-through' : 'none' }}>
              {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
              {todo.complete ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseReducerPage;