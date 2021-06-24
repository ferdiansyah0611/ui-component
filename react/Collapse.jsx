import React, { useState } from 'react';
import Button from './Button';

function Collapse(props) {
  const [state] = useState({
    id: 'collapse-' + Math.floor(Math.random() * 100000)
  });
  const handle = e => {
    e.preventDefault();
    const el = document.querySelector(`#${state.id}>.body`);
    if (el.classList.contains('h-0')) {
      el.classList.remove('h-0', 'hidden');
      el.classList.add('h-auto');
    } else {
      el.classList.add('h-0', 'hidden');
      el.classList.remove('h-auto');
    }
  };
  return (
    <div id={state.id}>
      <div className="grid grid-flow-col">
        <Button
          role={props.role ? props.role : 'button'}
          type={props.type ? props.type : 'primary'}
          onClick={handle}
        >
          {props.title}
        </Button>
      </div>
      <div className="body w-full h-0 hidden p-3 border transition-all duration-300 bg-white flex flex-wrap text-black">
        {props.children}
      </div>
    </div>
  );
}

export default Collapse;
