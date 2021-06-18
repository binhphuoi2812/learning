import react , {Component} from 'react';

class HomeComponent extends Component{
    constructor(props){
         super(props);
         this.state = {
             content: "Hello World"
         }
    }

    render(){
        return(

            <div>
             Home Page
            </div>
        )
    }
}

export default HomeComponent;
