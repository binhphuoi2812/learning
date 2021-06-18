import { useState } from "react"

const Son = (props) => {

    const  [flag , setFlag] = useState(true) 
    return <div>
        <p>{props.content}</p>
        {props.render(flag)}

        <button onClick={()=>{
            setFlag(!flag)
        }}>Touch me</button>
        {props.children}
    </div>

}

export const Father = () => {
     return <Son content="hey , bitch" render ={(flag)=>flag ? <div>
         <p>Are you done ?</p> 
     </div> : <div><p>Delete</p></div>

     } >

        <div>
            <p>what'sup</p>
        </div>
    </Son>

}