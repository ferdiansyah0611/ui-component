import React from 'react'

export default function(props){
  return(
    <>
    {
      props.ui ? (
        <textarea
          disabled={props.disabled ? true: false}
          placeholder={props.place}
          onKeyUp={props.keyUp}
          className={props.color ? 'focus:border-' + props.color + ' border-b p-3 outline-none w-full transition-all duration-500' : 'border-b focus:border-blue-400 p-3 outline-none w-full transition-all duration-500'}
          style={{minHeight: props.min ? props.min: 40 + 'px', maxHeight: props.max ? props.max: 100 + 'px'}}
        ></textarea>
      ):
      (
        <textarea
          disabled={props.disabled ? true: false}
          placeholder={props.place}
          onKeyUp={props.keyUp}
          className="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100"
          style={{minHeight: props.min ? props.min: 40 + 'px', maxHeight: props.max ? props.max: 100 + 'px'}}
        ></textarea>
      )
    }
    {
      props.help ?
      (
        <p className="text-sm p-1 text-gray-500">{props.help}</p>
      ): false
    }
    </>
  )
}