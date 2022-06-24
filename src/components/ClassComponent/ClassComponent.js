import React, {Component} from 'react'

class ClassComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            message2 : 'Life is good',
            message3 : 'It is morning'
        }
    }

    changeMessage = () =>{
        this.setState({message2:'Life is great'}
        ) 
    }

    changeMessage2n3 = () =>{
        this.setState({message2:'Life is great',
        message3:'It is night'}
        )
    }

    render(){
        let {message} = this.props;
        let {message2, message3} = this.state;
        return(
            <>
            <div>{message}</div>
            <div>{message2}</div>
            <div>{message3}</div>
            <button onClick={this.changeMessage}>Change Message</button>
            <button onClick={this.changeMessage2n3}>Change 2 Messages</button>
            </>
        )
    }

}

export default ClassComponent;