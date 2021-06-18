import React, { Component } from 'react'  
import Clock from 'react-clock';  
// import './ClockDemo.css';  
export class ClockDemo extends Component {  
  state = {  
    date: new Date(),  
  }  
  
  componentDidMount() {  
    setInterval(  
      () => this.setState({ date: new Date() }),  
      3000  
    );  
  }  
  render() {  
    return (  
      <div className="container">  
        <div class="row" className="hdr">  
          <div class="col-sm-12 btn btn-info">  
          How To Show a Clock in ReactJS  
            </div>  
        </div>  
        <div className="clk">  
          <Clock  
            value={this.state.date}  
          />  
        </div>  
      </div>  
    )  
  }  
}  
  
export default ClockDemo  