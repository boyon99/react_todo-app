import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      {/* children의 값으로  <TodoInsert />와 <TodoList />가 전달되고 있다. */}
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;