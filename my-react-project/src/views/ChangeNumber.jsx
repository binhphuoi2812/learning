import React, { useEffect, useState } from 'react'
import './useMemo.css'

const ChangeNumberComponent = (props) => {
    const [plus, setFunc] = useState(0);
    useEffect(()=>{
        setFunc(props.func())
    }
    ,[props.func()])
    // console.log("memo");
    return (
        <div>
            <p> Number + 5 : {plus}</p>
            {/* <p>{props.num}</p> */}
        </div>
    );
}

export default React.memo(ChangeNumberComponent);