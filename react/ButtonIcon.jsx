import React, { Component } from 'react';

const list = [
  {
    type: 'primary',
    cls:
      'bg-blue-500 text-white focus:outline-none focus:ring-4 focus:ring-blue-300'
  },
  {
    type: 'danger',
    cls:
      'bg-red-500 text-white focus:outline-none focus:ring-4 focus:ring-red-300'
  },
  {
    type: 'success',
    cls:
      'bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-green-300'
  },
  {
    type: 'warning',
    cls:
      'bg-yellow-500 text-white focus:outline-none focus:ring-4 focus:ring-yellow-300'
  },
  {
    type: 'dark',
    cls:
      'bg-black text-white focus:outline-none focus:ring-4 focus:ring-gray-600'
  },
  {
    type: 'light',
    cls:
      'bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-100 border border-gray-200'
  },
  {
    type: 'secondary',
    cls:
      'bg-gray-200 text-black focus:outline-none focus:ring-4 focus:ring-gray-100 border border-gray-100'
  }
];

class ButtonIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cls: ''
    };
  }
  componentDidMount() {
    const props = this.props;
    const type = list.find(d => d.type === props.type);
    if (type) {
      this.setState({ cls: type.cls });
    }
    if (props.size) {
      switch (props.size) {
        case 'sm':
          type.cls = type.cls + ' p-2';
          break;
        case 'md':
          type.cls = type.cls + ' p-3';
          break;
        case 'lg':
          type.cls = type.cls + ' p-4';
          break;
        default:
          break;
      }
    }
    if (!props.size) {
      type.cls = type.cls + ' p-3';
    }
    this.setState({ cls: type.cls + ' flex justify-start' });
  }
  render() {
    const props = this.props;
    return (
      <button
        type={props.role ? props.role : undefined}
        className={this.state.cls}
      >
        {props.children}
      </button>
    );
  }
}

export default ButtonIcon;
