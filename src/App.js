import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  // id값은 ref를 사용하여 변수로 담기
  const nextId = useRef(2501)

  // 추가하기
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current, text, checked: false
    }
    setTodos(todos => todos.concat(todo));
    nextId.current += 1
  },
    []
  )

  // 제거하기
  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  // 수정하기
  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }, [])

  return (
    <TodoTemplate>
      {/* children의 값으로  <TodoInsert />와 <TodoList />가 전달된다. */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
