import react , {Component} from 'react';

class TitleComponent extends Component{
    constructor(props){
         super(props);
         this.state = {
             content: "Hello World"
         }
    }

    render(){
        return(

            <div>
                <h1>Title is : "{this.state.content}"</h1>
                <button onClick={this.props.add} >Click to +</button>
                <button onClick={this.props.minus}>Click to -</button>
                <h1>Number: "{this.props.countNumber}"</h1>
            </div>
        )
    }
}

export default TitleComponent;
