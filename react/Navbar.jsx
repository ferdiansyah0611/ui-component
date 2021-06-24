import React from 'react'

const list = [
	{post: 'top-fixed-primary', cls: 'fixed top-0 left-0 z-20 flex w-full bg-blue-500 text-white shadow-md'},
	{post: 'top-fixed-danger', cls: 'fixed top-0 left-0 z-20 flex w-full bg-red-500 text-white shadow-md'},
	{post: 'top-fixed-success', cls: 'fixed top-0 left-0 z-20 flex w-full bg-green-500 text-white shadow-md'},
	{post: 'top-fixed-warning', cls: 'fixed top-0 left-0 z-20 flex w-full bg-yellow-500 text-white shadow-md'},
	{post: 'top-fixed-dark', cls: 'fixed top-0 left-0 z-20 flex w-full bg-black text-white shadow-md'},
	{post: 'top-fixed-light', cls: 'fixed top-0 left-0 z-20 flex w-full bg-white text-black shadow-md'},
	{post: 'top-fixed-secondary', cls: 'fixed top-0 left-0 z-20 flex w-full bg-gray-400 text-white shadow-md'},
	{post: 'bottom-fixed-primary', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-blue-500 text-white shadow-md'},
	{post: 'bottom-fixed-danger', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-red-500 text-white shadow-md'},
	{post: 'bottom-fixed-success', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-green-500 text-white shadow-md'},
	{post: 'bottom-fixed-warning', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-yellow-500 text-white shadow-md'},
	{post: 'bottom-fixed-dark', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-black text-white shadow-md'},
	{post: 'bottom-fixed-light', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-white text-black shadow-md'},
	{post: 'bottom-fixed-secondary', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-gray-400 text-white shadow-md'},
	{post: 'top-absolute-primary', cls: 'absolute top-0 left-0 z-20 flex w-full bg-blue-500 text-white shadow-md'},
	{post: 'top-absolute-danger', cls: 'absolute top-0 left-0 z-20 flex w-full bg-red-500 text-white shadow-md'},
	{post: 'top-absolute-success', cls: 'absolute top-0 left-0 z-20 flex w-full bg-green-500 text-white shadow-md'},
	{post: 'top-absolute-warning', cls: 'absolute top-0 left-0 z-20 flex w-full bg-yellow-500 text-white shadow-md'},
	{post: 'top-absolute-dark', cls: 'absolute top-0 left-0 z-20 flex w-full bg-black text-white shadow-md'},
	{post: 'top-absolute-light', cls: 'absolute top-0 left-0 z-20 flex w-full bg-white text-black shadow-md'},
	{post: 'top-absolute-secondary', cls: 'absolute top-0 left-0 z-20 flex w-full bg-gray-400 text-white shadow-md'},
	{post: 'primary', cls: 'flex w-full bg-blue-500 text-white shadow-md'},
	{post: 'danger', cls: 'flex w-full bg-red-500 text-white shadow-md'},
	{post: 'success', cls: 'flex w-full bg-green-500 text-white shadow-md'},
	{post: 'warning', cls: 'flex w-full bg-yellow-500 text-white shadow-md'},
	{post: 'dark', cls: 'flex w-full bg-black text-white shadow-md'},
	{post: 'light', cls: 'flex w-full bg-white text-black shadow-md'},
	{post: 'secondary', cls: 'flex w-full bg-gray-400 text-white shadow-md'},
]

function Navbar(props){
  const [state, set] = React.useState({cls: ''})
  React.useEffect(() => {
    for (var i = 0; i < list.length; i++) {
      if(list[i].post == props.type){
        set({cls: list[i].cls})
        break;
      }
    }
  }, [props.type])
  return(
    <div className={state.cls}>
      <div className="flex w-full sm:hidden">
        {props.mobile}
      </div>
      <div className="sm:flex w-full hidden">
        {props.navs}
      </div>
    </div>
  )
}

export default Navbar