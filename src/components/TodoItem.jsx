import React from 'react';
import '../styles/ItemStyle.css';

const TodoItem = ({ todo, onDelete }) => {
    return (
    <div className='allBox'>
        <div className='mainLayout'>
            <span>{todo.text}</span>
            <button className='btn' onClick={() => onDelete(todo.id)}>삭제</button>
        </div>
    </div>
    );
};

export default TodoItem;