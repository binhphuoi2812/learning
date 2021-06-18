import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "./Table";

const HookListInput = () => {
   
    var ListPerson = [
        {
            id: 0,
            name: "binh",
            hobby: "bong ro"
        },
        {
            id: 1,
            name: "MariaOzawa",
            hobby: "xep hinh"
        },

        {
            id: 2,
            name: "Yui Hatano",
            hobby: "xep hinh"
        }

    ]
    var Person = {
        id: "",
        name: "",
        hobby: ""

    }
    
    const [id, updateId] = useState('');
    const [character, updateCharacter] = useState('');
    const [hobby, updateHobby] = useState('');

    const [list, updateList] = useState(ListPerson);

    const handleClick = () => {
        Person.id = id;
        Person.name = character;
        Person.hobby = hobby;


      
        updateList([...list, Person]);
        updateId("")
        updateCharacter("")
        updateHobby("")
    }
    const ChangeId = (e) => {
        updateId(e.target.value)

    }
    const ChangeCharacter = (e) => {
        updateCharacter(e.target.value)

    }
    const ChangeHobby = (e) => {
        updateHobby(e.target.value)

    }

    return <div>

        <input type="text" value={id} onChange={ChangeId}></input>
        <input type="text" value={character} onChange={ChangeCharacter}></input>
        <input type="text" value={hobby} onChange={ChangeHobby}></input>
        <button onClick={handleClick}>Add Person</button>
        <ListComponent list={list}></ListComponent>
    </div>

};
const ListComponent = (props) => {
    return <div>
        <div>List</div>
        <div class="base">


            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Hobby</th>
                </tr>
                {/* <td>{props.list.map(item => <tr key={Math.random()}>
                        <div class="item">{item.id}</div></tr>)}</td>
                    <td>{props.list.map(item => <tr key={Math.random()}>
                        <div class="item">{item.name}</div></tr>)}</td>
                    <td>{props.list.map(item => <tr key={Math.random()}>
                        <div class="item">{item.hobby}</div></tr>)}</td> */}

                {props.list.map(item => <tr>
                    <td key={Math.random()}>
                        <div class="item">{item.id}</div></td>
                    <td key={Math.random()}>
                        <div class="item">{item.name}</div></td>
                    <td key={Math.random()}>
                        <div class="item">{item.hobby}</div></td>
                </tr>
                )}
                

            </table>
            

        </div>
        {/* <Table listTable={props.list}></Table> */}
    </div>
};

export default HookListInput;