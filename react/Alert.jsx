import React, { Component } from "react";

const list = [
	{type: 'primary', cls: 'bg-blue-500 text-white shadow flex'},
	{type: 'danger', cls: 'bg-red-500 text-white shadow flex'},
	{type: 'success', cls: 'bg-green-500 text-white shadow flex'},
	{type: 'warning', cls: 'bg-yellow-500 text-white shadow flex'},
	{type: 'dark', cls: 'bg-black text-white shadow flex'},
	{type: 'light', cls: 'bg-white text-black border border-gray-200 flex'},
	{type: 'secondary', cls: 'bg-gray-200 text-black border border-gray-300 flex'},
]

class Alert extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: 'alert-' + Math.floor(Math.random() * 100000),
      cls: ''
    }
  }
  _type(){
    return list.find((d) => d.type === this.props.type)
  }
  close(){
    this.setState({cls: this.state.cls.replace('flex', 'hidden')})
  }
  componentDidMount(){
    const props = this.props;
    let type    = this._type();
    if(type){
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
      this.setState({ cls: type.cls + " p-3" });
    }
    if(props.open) {
      type.cls = type.cls.replace('hidden', 'flex')
    }
    if(!props.open) {
      type.cls = type.cls.replace('flex', 'hidden')
    }
    this.setState({cls: type.cls})
  }
  render(){
    const props = this.props;
    return(
      <div id={this.state.id} className={this.state.cls}>
        <p className="w-full">{props.children}</p>
        <span className="cursor-pointer" onClick={e => this.close()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>
    )
  }
}

export default Alert
