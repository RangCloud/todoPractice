import React, { useState } from 'react';
import '../styles/FormStyle.css'

const TodoForm = ({ onAdd }) => {
    const [newTodo, setNewTodo] = useState(''); // 새로운 목록 추가할 때 빈 상태

    const onSubmit = (e) => { // event 일어날때
    e.preventDefault(); // preventDefault로 추가해서 submit 했을 때 새로고침 방지
    if (newTodo.trim() === '') return; // 빈 상자로만 추가할 경우 추가안되게하기 trim은 공백제거할때 쓰는 함수
    onAdd(newTodo);
    setNewTodo('');
};

    return (
        <div className='formBox'>
            <form onSubmit={onSubmit}>
            <input
            className='inputBox'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // 새로운 목록의 값 타겟
            placeholder="할 일을 입력하세요"
            />
            <button className='formBtn' type="submit">추가</button>
            </form>
        </div>
    );
};

export default TodoForm;