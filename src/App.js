import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    text: '리액트의 기초 알아보기',
    checked: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링 해보기',
    checked: true
  },
  {
    id: 3,
    text: '일정관리',
    checked: false
  }])
  return (
    <TodoTemplate>
      {/* children의 값으로  <TodoInsert />와 <TodoList />가 전달된다. */}
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
