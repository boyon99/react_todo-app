import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

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

  // id값은 ref를 사용하여 변수로 담기
  const nextId = useRef(4)

  // todolist를 목록으로 집어넣는 함수
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current, text, checked: false
    }
    setTodos(todos.concat(todo));
    nextId.current += 1
  },
    [todos]
  )

  return (
    <TodoTemplate>
      {/* children의 값으로  <TodoInsert />와 <TodoList />가 전달된다. */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
