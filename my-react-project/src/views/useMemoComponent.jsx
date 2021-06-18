import React, { useCallback, useState } from 'react'
import ChangeNumberComponent from './ChangeNumber';
import './useMemo.css'

const UseMemoComponent = () => {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('black')
    const plusFive = useCallback( ()=>{
        console.log("PlusFive Active !!");
        return number + 5 ;
    },[number]);
    return (
        <div>
            <div>Number : {number}</div>
            <ChangeNumberComponent num={number} func ={plusFive}></ChangeNumberComponent>
            <button onClick={
                () => {
                    setNumber(number + 1)
                }
            }>Click me</button>
            <button onClick={
                () => setColor(color === 'black' ? 'white' : 'black')
            }>Change Color</button>
            <div className={color}>
                <p>test color</p>
            </div>
        </div>
    );
}

export default UseMemoComponent;
