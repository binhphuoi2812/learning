import React, { useEffect, useState } from "react";

const ChildComponent2 = (props) => {
    const [number, setNumber] = useState(5);
    const [number2, setNumber2] = useState(1);
    const handleTouchPlus = () => {
        setNumber(number + 5);
    }
    const handleTouchMinus = () => {
        setNumber2(number2 - 5);
    }

    useEffect(
        () => {
            console.log("useEffect DidMount")
            return () => {
                console.log("useEffectWillMount")
            }
        }, []);

    useEffect(
        () => {
            console.log("use Effect Plus")
        }, [number]);
    useEffect(
        () => {
            console.log("use Effect Minus")
        }, [number2]);
    useEffect(
        () => {
            console.log("1 vs 2");
        }, [number, number2])


    return <div >
        <div>{props.name}</div>
        <div>{number}</div>
        <div>{number2}</div>
        
        <button onClick={handleTouchPlus}>Touch to +</button>
        <button onClick={handleTouchMinus}>Touch to -</button>

    </div>
}
export default ChildComponent2;