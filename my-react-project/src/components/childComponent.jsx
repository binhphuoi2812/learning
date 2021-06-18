import { Component } from "react";
import React from "react";
import TitleComponent from "./titleComponent";
class ChildComponent extends Component {
    constructor(props) { // chay vao dau tien khi component chay , props : send request from father
        super(props);
        this.state = { // control data
            name: "Click me",
            count: 0
        }
    }

    clickPlus = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    clickSub = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    componentWillMount() {
        console.log("CWM");
    }
    componentDidMount() {
        console.log("CDM");
    }
    componentWillUpdate() {
        console.log("CWU")
    }
    componentDidUpdate() {
        console.log("CDU");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("SCU");
        console.log(nextState.count)
        if (nextState.count < 3) {
            return true;
        }
        return false;
    }
    render() {
        console.log("render");
        return (
            <div>
                <div>Child Component</div>
                <div>{this.state.name}</div>

                <button onClick={this.clickPlus} >Click to +</button>
                <button onClick={this.clickSub}>Click to -</button>
                <h4>{this.state.count}</h4>
                <TitleComponent
                    countNumber={this.state.count}
                    minus={this.clickSub}
                    add={this.clickPlus}
                ></TitleComponent>
            </div>
        );


    }
}

export default ChildComponent;