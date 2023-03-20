import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoTemplate>
      {/* children의 값으로  <TodoInsert />와 <TodoList />가 전달된다. */}
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
