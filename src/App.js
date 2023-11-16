import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState([ // 할 일 목록 상태관리
    {id: 1, text: '예시 목록'}
  ]);

  // 추가 함수
  const onAdd = (text) => {
    setTodo((prevTodo) => [ // 이전의 할 일 배열 목록 만들고
      ...prevTodo,
      { id: prevTodo.length + 1, text}, // 배열에 새로운 목록 추가
    ]);
  };

  // 삭제 함수
  const onDelete = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className='layout'>
      <h1>To Do List</h1>
      <TodoForm onAdd={onAdd} />
      <TodoList todo={todo} onDelete={onDelete} />
    </div>
  );
};

export default App;