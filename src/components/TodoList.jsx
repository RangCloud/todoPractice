import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todo, onDelete }) => {
    return (
    <div>
        {todo.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
    </div>
    );
};

export default TodoList;