import React from 'react'

export default function(props){
  const [id, setid] = React.useState('file-' + Math.floor(Math.random() * 10000))
  const handle = (e) => {
    e.preventDefault()
    document.querySelector(`input[name=${id}`).click()
  }
  return(
    <>
      <button role="button" disabled={props.disabled ? true: false} className={props.disabled ? 'p-3 w-full border bg-gray-200 cursor-default' : 'p-3 w-full border focus:outline-none focus:ring focus:ring-gray-100'} onClick={handle}>{props.title ? props.title : 'Attachment File'}</button>
        <input className="hidden" accept={props.accept} name={id} onChange={e => props.change(e.target.files)} type="file"/>
      {
        props.help ? (<p className="text-sm p-1 text-gray-500">{props.help}</p>): ''
      }
    </>
  )
}