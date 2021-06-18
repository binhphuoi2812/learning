 import React,{useState,useEffect} from 'react';

    const Test = ()=> {
        const [date, setDate] = useState(new Date());
      
       useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        console.log("a")
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
         function tick() {
          setDate(new Date());
         }


    return <div>
        {/* <p>{date.toLocaleTimeString()}</p> */}
        <TextPlace state = {date}></TextPlace>
    </div>
    
  
 }

 const TextPlace = (props) =>{

  return <p>{props.state.toLocaleTimeString()}</p>

 }

 export default Test;