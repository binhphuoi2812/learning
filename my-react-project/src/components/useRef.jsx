import React, { Fragment, useRef, useState } from 'react'


export const CallRef = () =>{


    const  [state,setState] = useState()

    const nameInput = useRef()
    
    const HandleClick = () =>{

        //  setState(e.target.value)
        console.log(nameInput.current.value)
        setState(nameInput.current.value)
        nameInput.current.value = "";
 

        
    }


     
    // console.log(nameInput.current.value)
    console.log(nameInput.current)
    console.log(state)
    return <Fragment>
        <input type="text"  ref = {nameInput} />
        <p>{state}</p>
        <button type="button" onClick={HandleClick} >Submit</button>
    </Fragment>
}