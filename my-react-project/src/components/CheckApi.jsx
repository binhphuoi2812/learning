import React, { useEffect, useState } from 'react'


export const GetApi = () => {

    const [state, setState] = useState({
      
    })

    const [choosen , setChoosen] = useState(1);


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = "";

        var requestOptions = {
            method: 'GET',
           
            redirect: 'follow'
        };

        fetch(`https://swapi.dev/api/people/${choosen}`, requestOptions)
            .then(response => response.json())
            .then(result => setState(result))
            .catch(error => console.log('error', error));
    },[choosen])


  
   
    return <div>
        <p>{state.name}</p>
        <select name="" id="" value ={choosen} onChange={(e)=> setChoosen(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
}