import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
    this.state={number:0}
    }



   componentDidMount(){
console.log('component did mount ')
   }

componentDidUpdate(){
    console.log('component did update ')


}
componentWillUnmount(){
    console.log('component will unmount ')

    
}
   
    render() {
        console.log('rendering')
        const number=(x)=>{
            return x+1
        }
       
       const counter=0
       
       
       
        return (
            <div>
                <button onClick={()=>this.state.number >1 && this.setState({number:this.state.number-1})} > - </button>
                <div>{this.state.number}</div>
                <button onClick={()=>this.setState({number:this.state.number+1})}> + </button>

                <h1 className='namee'>farhat eleuch</h1>
                <h2 className='dress'> manouba city khaled ibn walid</h2>
                <img className='imgg' src='./pdp.jpg' />
            </div>
        )
    }
}
