import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        this.state ={
            count: 0
        };
    }

    incrementCounter = () =>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }

    decrementCounter = () =>{
        this.setState((prevState)=>({
            count: prevState.count - 1
        }))
    }

    incrementCounterBy5=()=>{
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render(){
        const styles ={
            counter:{
                fontSize: '2em',       
            },
            incrementDecrementButton: {
                padding: "10px 15px",
                fontSize: "2em",
              },
        }
      
        let {count} = this.state;
        return(
            <div>         
                <h1 style={styles.counter}>{count}</h1>
                <p >Counter</p>
                <button  style={styles.incrementDecrementButton} onClick={this.incrementCounter}>Increment Counter</button>
                <button style={styles.incrementDecrementButton} onClick={this.decrementCounter}>Decrement Counter</button>
                <button style={styles.incrementDecrementButton} onClick={this.incrementCounterBy5}>Increment by 5</button>
            </div>
        )
    }
}

export default Counter;

