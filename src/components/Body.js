import React from 'react';

const Body = (props) => {
  const renderList = (items) => {
    return items.map((item) => {
      return (
        <div
          key={item.id}
          className='todo-item'
          onClick={() => props.onClickTodo(item.id)}
        >
          <label className={item.status === true ? 'completed' : ''}>
            {item.todo}
          </label>
        </div>
      );
    });
  };

  return <div className='card-body'>{renderList(props.items)}</div>;
};

export default Body;
