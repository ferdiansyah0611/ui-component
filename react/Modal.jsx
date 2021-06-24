import React from 'react'
import Button from './Button'

function Modal(props){
  const [state,set] = React.useState({
    open: false,
    id: 'modal-' + Math.floor(Math.random() * 10000)
  })
  const handle = (e) => {
    e.preventDefault()
    const el = document.querySelector(`#${state.id}`)
		if(!state.open){
      set({open: true, id: state.id})
			document.body.classList.add('overflow-hidden')
			el.classList.add('scale-100')
			el.classList.remove('scale-0')
		}else{
      set({open: false, id: state.id})
			document.body.classList.remove('overflow-hidden')
			el.classList.remove('scale-100')
			el.classList.add('scale-0')
		}
  }
  return(
    <>
      <Button onClick={handle} type={props.type}>{props.title}</Button>
      <div id={state.id} className="bg-black bg-opacity-75 w-full fixed left-0 top-0 transform transition-all duration-200 scale-0 flex flex-wrap h-screen z-50 overflow-auto">
      {
        props.template === false ?
        (
          <div className="bg-white shadow-md border w-full sm:w-2/3 md:w-3/5 p-3 mx-5 sm:mx-auto my-10 relative">
            {props.children}
            <div className="border flex p-3 absolute bottom-0 left-0 w-full bg-white">
              <Button onClick={handle} type="danger">Close</Button>
              {props.action}
            </div>
          </div>
        ): false
      }
      {
        props.template === 'full' ? 
        (
          <div className="bg-white shadow-md border w-full sm:w-2/3 md:w-3/5 mx-5 sm:mx-auto my-10 relative">
            <div className="border-b flex p-3 absolute top-0 left-0 w-full font-bold bg-whiteS">
            {props.header}
            </div>
            <div className="p-3 mt-12 overflow-auto" style="height: calc(100vh - 12.6em);">
              {props.children}
            </div>
            <div className="border-t flex p-3 absolute bottom-0 left-0 w-full bg-white">
              <Button onClick={handle} type="danger">Close</Button>
              {props.action}
            </div>
          </div>

        ): false
      }
      </div>
    </>
  )
}

export default Modal