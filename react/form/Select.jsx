import React from 'react'

export default function(props){
  return(
    <>
    <select disabled={props.disabled ? true: false} onChange={props.handle} className="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100 bg-white">
      <option value={props.defaultValue} selected={true}>{props.defaultValue}</option>
      {
        props.option.map((data, key) => (
          <option key={key} value={data}>{data}</option>
        ))
      }
	  </select>
    {
      props.help ? (<p className="text-sm p-1 text-gray-500">{props.help}</p>): ''
    }
    </>
  )
}