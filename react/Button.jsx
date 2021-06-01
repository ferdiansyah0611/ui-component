import React, { Component } from "react";

const list = [
  {
    type: "primary",
    cls:
      "bg-blue-500 text-white focus:outline-none focus:ring-4 focus:ring-blue-200 text-center"
  },
  {
    type: "danger",
    cls:
      "bg-red-500 text-white focus:outline-none focus:ring-4 focus:ring-red-200 text-center"
  },
  {
    type: "success",
    cls:
      "bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-green-200 text-center"
  },
  {
    type: "warning",
    cls:
      "bg-yellow-500 text-white focus:outline-none focus:ring-4 focus:ring-yellow-200 text-center"
  },
  {
    type: "dark",
    cls:
      "bg-black text-white focus:outline-none focus:ring-4 focus:ring-gray-600"
  },
  {
    type: "light",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-100 border border-gray-200 text-center"
  },
  {
    type: "secondary",
    cls:
      "bg-gray-200 text-black focus:outline-none focus:ring-4 focus:ring-gray-100 border border-gray-100 text-center"
  },
  {
    type: "outline-primary",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-blue-200 focus:bg-blue-500 hover:bg-blue-500 border-2 hover:text-white focus:text-white border-blue-500 text-center"
  },
  {
    type: "outline-danger",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-red-200 focus:bg-red-500 hover:bg-red-500 border-2 hover:text-white focus:text-white border-red-500 text-center"
  },
  {
    type: "outline-success",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-green-200 focus:bg-green-500 hover:bg-green-500 border-2 hover:text-white focus:text-white border-green-500 text-center"
  },
  {
    type: "outline-warning",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:bg-yellow-500 hover:bg-yellow-500 border-2 hover:text-white focus:text-white border-yellow-500 text-center"
  },
  {
    type: "outline-dark",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-600 focus:bg-black hover:bg-black border-2 hover:text-white focus:text-white border-black text-center"
  },
  {
    type: "outline-light",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-100 focus:bg-gray-300 hover:bg-gray-300 border-2 hover:text-white focus:text-white border-gray-300 text-center"
  },
  {
    type: "outline-secondary",
    cls:
      "bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-200 focus:bg-gray-500 hover:bg-gray-500 border-2 hover:text-white focus:text-white border-gray-500 text-center"
  }
];

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cls: ""
    };
  }
  componentDidMount() {
    const props = this.props;
    const type = list.find((d) => d.type === props.type);
    if (type) {
      this.setState({ cls: type.cls })
    }
    if (props.size) {
      switch (props.size) {
        case "sm":
          type.cls = type.cls + " p-2"
          break;
        case "md":
            type.cls = type.cls + " p-3"
          break;
        case "lg":
            type.cls = type.cls + " p-4"
          break;
        default:
          break;
      }
    }
    if (!props.size) {
      type.cls = type.cls + " p-3"
    }
    this.setState({cls: type.cls})
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

export default Button;
