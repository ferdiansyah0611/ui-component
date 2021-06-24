import React from 'react';
import Button from './Button'

function Tabs(props) {
  const [state, set] = React.useState({
    open: ''
  });
  React.useEffect(() => {
    set({
      open: props.default
    });
    console.log(props.default, props[props.default]);
  }, [props.default, props[props.default]]);
  const handle = (e, name) => {
    e.preventDefault();
    if (name !== state.open) {
      set({
        open: name
      });
    }
  };
  return (
    <>
      {props.post === 'x' ? (
        <div>
          <div className="grid grid-flow-col">
            {props.title.map((data, key) => (
              <Button
                onClick={e => handle(e, data.name)}
                key={key}
                type={props.type}
                data-name={data.name}
              >
                {data.title}
              </Button>
            ))}
          </div>
          <div className="body">
            {props.title.map((data, key) => (
              <div key={key}>
                {data.name === state.open ? (
                  <div className={props.noPadding ? 'w-full block border': 'w-full block p-3 border'}>{props[data.name]}</div>
                ) : (
                  <div className="w-full hidden">{props[data.name]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        false
      )}
      {props.post === 'y' ? (
        <div className="flex">
          <div className="grid grid-flow-row w-1/5">
            {props.title.map((data, key) => (
              <Button
                onClick={handle}
                key={key}
                type={props.type}
                data-name={data.name}
              >
                {data.title}
              </Button>
            ))}
          </div>
          <div className="body w-4/5">
            {props.title.map((data, key) => (
              <div key={key}>
                {data.name === state.open ? (
                  <div className={props.noPadding ? 'w-full block border': 'w-full block p-3 border'}>{props[data.name]}</div>
                ) : (
                  <div className="w-full hidden">{props[data.name]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Tabs;
