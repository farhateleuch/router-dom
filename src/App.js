import React, { Component } from 'react'
import ClassComponent from './companent/ClassComponent'

export default class App extends Component {
 constructor(props){
   super(props)
   this.state={show:true}
  }
  render() {
    console.log(this.state.show)

    return (
      <div>
       {this.state.show && <ClassComponent/>}
     
     <button onClick={()=>this.setState({show:!this.state.show})}>show | hide </button>
      </div>
    )
  }
}
