import React from "react";
import HookListInput from "./hookListInput";

const Table = (props) =>{

     return<div>
         
         {/* {props.listTable.map(item => <tr>
        <td key={Math.random()}>
            <div class="item">{item.id}</div></td>
        <td key={Math.random()}>
            <div class="item">{item.name}</div></td>
        <td key={Math.random()}>
            <div class="item">{item.hobby}</div></td>
    </tr>
    
    
    )} */}
    <table>
        
            <thead>
                <td>ID</td>
                <td>Name</td>
                <td>Hobby</td>
            </thead>
            <tbody>
                {props.listTable.map((item,index) => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.hobby}</td>
                </tr> )}
            </tbody>
        </table>
    </div>
};
export default Table;