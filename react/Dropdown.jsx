import React from 'react';
import Button from './Button'

function Dropdown(props) {
  const [state, set] = React.useState({
    cls: '',
    open: false,
    clasess: 'hidden'
  });
  React.useEffect(() => {
    if (props.animate) {
      set({
        clasess:
          ' visible transform scale-0 transition duration-200 flex flex-wrap w-full bg-white p-1 border absolute top-0 left-0 mt-12 z-10'
      });
    }
  }, props.animate);
  const handle = e => {
    e.preventDefault();
    if(!state.open){
      set({open: true})
      if(props.animate == 'scale'){
        set({open: true, clasess: 'transform scale-100 transition duration-200 flex flex-wrap w-full bg-white p-1 border absolute top-0 left-0 mt-12 z-10'})
      }
      else{
        set({open: true, clasess: 'flex flex-wrap w-full bg-white p-1 border absolute top-0 left-0 mt-12 z-10'})
      }
    }else{
      set({open: false})
      if(props.animate == 'scale'){
        set({open: false, clasess: ' visible transform scale-0 transition duration-200 flex flex-wrap w-full bg-white p-1 border absolute top-0 left-0 mt-12 z-10'})
      }
      else{
        set({open: false, clasess: 'hidden'})
      }
    }
  };

  return (
    <div className="w-full flex flex-wrap relative">
      <Button w="full" onClick={handle} type="primary">{props.txt}</Button>
      {props.link ? (
        <div className={state.clasess}>
          {props.link.map(data => (
            <Link
              className="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white"
              to={data.link}
            >
              {data.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className={state.clasess}>{props.children}</div>
      )}
    </div>
  );
}

export default Dropdown;
