import React from 'react';

function Sidebar(props) {
  const [state, set] = React.useState({
    id: 'sidebar-' + Math.floor(Math.random() * 10000),
    open: false,
    sidebar: {
      classes: ' body'
    }
  });
  React.useEffect(() => {
    if (props.post == 'right') {
      set({
        id: state.id,
        open: state.open,
        sidebar: {
          classes: state.sidebar.classes.replace(
            '',
            ' fixed z-40 top-0 transition-all duration-500 right-0 mr-full'
          )
        }
      });
    }
    if (props.post == 'left') {
      set({
        id: state.id,
        open: state.open,
        sidebar: {
          classes: state.sidebar.classes.replace(
            '',
            ' fixed z-40 top-0 transition-all duration-500 left-0 ml-full'
          )
        }
      });
    }
    if (props.post == 'top') {
      set({
        id: state.id,
        open: state.open,
        sidebar: {
          classes: state.sidebar.classes.replace(
            '',
            ' fixed z-40 transition-all duration-500 top-0 left-0 mt-full w-full'
          )
        }
      });
    }
    if (props.post == 'bottom') {
      set({
        id: state.id,
        open: state.open,
        sidebar: {
          classes: state.sidebar.classes.replace(
            '',
            ' fixed z-40 transition-all duration-500 bottom-0 left-0 mb-full w-full'
          )
        }
      });
    }
  }, [props.post]);
  const handle = e => {
    e.preventDefault();
    const opacity = document.querySelector(`#${state.id}>.opacity`);
    const body = document.querySelector(`#${state.id}>.body`);
    if (!state.open) {
      set({
        id: state.id,
        open: true,
        sidebar: state.sidebar
      });
      document.body.classList.add('overflow-hidden');
      opacity.classList.remove('hidden');
      if (props.post == 'right') {
        body.classList.remove('mr-full');
      }
      if (props.post == 'left') {
        body.classList.remove('ml-full');
      }
      if (props.post == 'top') {
        body.classList.remove('mt-full');
      }
      if (props.post == 'bottom') {
        body.classList.remove('mb-full');
      }
    } else {
      set({
        id: state.id,
        open: false,
        sidebar: state.sidebar
      });
      document.body.classList.remove('overflow-hidden');
      opacity.classList.add('hidden');
      if (props.post == 'right') {
        body.classList.add('mr-full');
      }
      if (props.post == 'left') {
        body.classList.add('ml-full');
      }
      if (props.post == 'top') {
        body.classList.add('mt-full');
      }
      if (props.post == 'bottom') {
        body.classList.add('mb-full');
      }
    }
  };
  return (
    <>
      <a onClick={handle} href="/" className={'p-' + props.p}>
        {props.icon}
      </a>
      <div id={state.id} className="menu">
        <div
          onClick={handle}
          className="opacity bg-black bg-opacity-50 h-screen top-0 left-0 w-full z-30 fixed overflow-auto cursor-pointer hidden"
        />
        {props.post == 'right' || props.post == 'left' ? (
          <div className={state.sidebar.classes}>
            <div
              className={
                props.w
                  ? 'w-' +
                    props.w +
                    ' bg-white h-screen overflow-auto text-black'
                  : 'bg-white w-48 h-screen overflow-auto text-black'
              }
            >
              <div className="p-3 font-bold text-center">{props.head}</div>
              <div className="flex flex-wrap">{props.children}</div>
            </div>
          </div>
        ) : (
          false
        )}
        {props.post == 'bottom' || props.post == 'top' ? (
          <div className={state.sidebar.classes}>
            <div className="bg-white w-full h-auto overflow-auto text-black">
              <div className="p-3 font-bold text-center">{props.head}</div>
              <div className="flex flex-wrap">{props.children}</div>
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default Sidebar;
