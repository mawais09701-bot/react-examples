import { Component } from "react";

class Count extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="count">Todos Count: {this.props.count}</div>
    )
  }
}

export default Count;