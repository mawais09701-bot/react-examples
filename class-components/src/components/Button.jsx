import { Component } from "react";

class Button extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <button type={this.props.type} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

export default Button;