import React, { useState } from 'react';

const InputAdd = (props) => {
  const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitTodo(todo);

    setTodo('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className='form-control'
        placeholder='Add'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  );
};

export default InputAdd;
