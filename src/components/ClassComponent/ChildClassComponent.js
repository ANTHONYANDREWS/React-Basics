import React,{Component} from 'react';

class ChildClassComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {personNo, personImg, personDetail,hobbies} = this.props
        return(
            <>
            {personNo}. {personDetail.firstName} {personDetail.lastName}
            <img src={personImg}  height={200} width={200} alt="" />
            <h3>Hobbies: {hobbies.join(', ')}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex molestias provident natus nam. Voluptatem alias facilis corrupti placeat nam! Eius magni odio provident veniam aliquid. Dolore delectus vel iure.</p>
            </>
        )
    }
}

export default ChildClassComponent;