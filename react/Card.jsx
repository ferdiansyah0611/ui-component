import React, { Component } from 'react';

const list = [
  {
    type: 'primary',
    cls: 'bg-blue-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'
  },
  {
    type: 'danger',
    cls: 'bg-red-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'
  },
  {
    type: 'success',
    cls: 'bg-green-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'
  },
  {
    type: 'warning',
    cls: 'bg-yellow-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'
  },
  {
    type: 'dark',
    cls: 'bg-black text-white flex flex-wrap p-2 sm:p-3 shadow-md'
  },
  {
    type: 'light',
    cls: 'bg-white text-black flex flex-wrap p-2 sm:p-3 shadow-md'
  },
  {
    type: 'secondary',
    cls: 'bg-gray-200 text-black flex flex-wrap p-2 sm:p-3 shadow-md'
  }
];

class Card extends Component {
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
    this.setState({ cls: type.cls });
  }
  render() {
    return (
      <div className={this.state.cls}>
        <div className="w-full p-1 sm:p-2 font-bold">{this.props.head}</div>
        <div className="w-full text-sm p-1 sm:p-2">{this.props.children}</div>
        <div className="w-full p-1 sm:p-2 grid grid-flow-col gap-1">
          {this.props.footer}
        </div>
      </div>
    );
  }
}

export default Card;
