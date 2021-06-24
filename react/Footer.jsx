import React from 'react'

export default function(props) {
  return (
    <>
      {props.pos == 'default' ? (
        <div className={'w-full flex text-white ' + props.color}>
          <div className="w-full md:w-1/2 flex flex-wrap">{props.left}</div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-end">
            {props.right}
          </div>
        </div>
      ) : (
        false
      )}
      {props.pos === 'center' ? (
        <div className={'w-full flex justify-center text-white ' + props.color}>
          {props.children}
        </div>
      ) : (
        false
      )}
    </>
  );
}
