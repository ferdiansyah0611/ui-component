import React from 'react'

export default function(props){
  return(
    <>
    {
      props.ui ?
      (
        <input
          disabled={props.disabled ? true: false}
          placeholder={props.place}
          onKeyUp={props.keyUp}
          type={props.type}
          required={props.required ? true: false}
          autoComplete={props.autoComplete ? 'on': 'off'}
          className={props.color ? 'focus:border-' + props.color + ' w-full border-b transition-all duration-500 p-3 outline-none': 'w-full border-b focus:border-blue-400 transition-all duration-500 p-3 outline-none'}
        />
      ):
      (
        <input
          disabled={props.disabled ? true: false}
          placeholder={props.place}
          onKeyUp={props.keyUp}
          type={props.type}
          required={props.required ? true: false}
          autoComplete={props.autoComplete ? 'on': 'off'}
          className="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100"
        />
      )
    }
    <p className="text-sm p-1 text-gray-500">{props.help ? props.help: ''}</p>
    </>
  )
}