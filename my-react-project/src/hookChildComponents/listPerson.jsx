import React, { useState,useEffect, useCallback  } from "react";

import { useDispatch, useSelector } from "react-redux";
import logo from './img/logo.jpg'
import avatar from './img/avatar-3.jpg'
import home from './img/home.jpg'
import phone from './img/phone.jpg'

const ListPersonComponent = () => {
    const dispatch = useDispatch();
    // const personDataInit = [
    //     {
    //         id: "Albert B Oliphant",
    //         name: "122 Drainer Avenue",
    //         hobby: "712-341-8415"
    //     },
    //     {
    //         id: "Sharon E Garcia",
    //         name: "540 Jacobs Street",
    //         hobby: "412-240-3536"
    //     },
    //     {
    //         id: "David H Olmos",
    //         name: "329 Emily Renzelli Boulevard",
    //         hobby: "831-636-9428"
    //     },
    //     {
    //         id: "George L Pedroza",
    //         name: "287 Robinson Lane",
    //         hobby: "740-210-2950"
    //     },
    //     {
    //         id: "Jose A Goforth",
    //         name: "1161 Stoney Lane",
    //         hobby: "972-933-9459"
    //     }
    // ]
    // const [dataTable,updateDataTable] = useState(personDataInit)
    

    const dataListPerson = useSelector(state => state.listPerson)

    const [id, updateId] = useState(" ")
    const [name, updateName] = useState(" ")
    const [hobby, updateHobby] = useState(" ")
    const onChangeId = (e) => {
        updateId(e.target.value);
    }
    const onChangeName = (e) => {
        updateName(e.target.value);
    }
    const onChangeHobby = (e) => {
        updateHobby(e.target.value);
    }
    const handleClick = () => {
        let Person = {
            id: id,
            name: name,
            hobby: hobby
        }

        dispatch({
            type: "ADD_PERSON",
            payload: Person
        })
        // updateDataTable([...dataTable, Person]);
    }
    const handleClickUpdate = () =>{
        let Person = {
            id: id,
            name: name,
            hobby: hobby

        }

        dispatch({
            type :"EDIT_PERSON",
            payload: Person
        })
    }

    return <div>
        <div className="header">
            <div className="header__content">
                <div className="header__content-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__content-title">
                    <p>Mah Friends</p>
                </div>
            </div>
            <div className="header__button">
                <div class="sub-main">
                    <button class="button-two" ><span><a className="button" href="#popup1">Add New</a></span></button>
                </div>
                <div id="popup1" class="overlay">
                    <div class="popup">
                        <h2>ADD FRIEND</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">

                            <div className="popup__input">
                                <label htmlFor="">Name</label><br></br>
                                <input type="text" onChange={onChangeId} value={id} /><br></br>
                            </div>

                            <div className="popup__input">
                                <label htmlFor="">Address</label><br></br>
                                <input type="text" onChange={onChangeName} value={name} /><br></br>

                            </div>

                            <div className="popup__input">
                                <label htmlFor="">Phone Number</label><br></br>
                                <input type="text" onChange={onChangeHobby} value={hobby} /><br></br>
                            </div>
                            <div className="popup-button">
                                <button onClick={handleClick}>Add Person</button><br></br>
                                <div className="popup-cancel">
                                    <a href="#">Cancel</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* <input type="text" onChange={onChangeId} value={id}/>
            <input type="text" onChange={onChangeName} value={name}/>
            <input type="text" onChange={onChangeHobby} value={hobby}/>
            <button onClick={handleClick}>AddPerson</button> */}
        </div>
        {/* <table>
            <thead>
                <td>ID</td>
                <td>Name</td>
                <td>Hobby</td>
            </thead>
            <tbody>
                {dataListPerson.map((item, index) => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.hobby}</td>
                    <td><button onClick={() => dispatch({
                        type: "DELETE_PERSON",
                        payload: item.id
                    })}>Delete</button></td>
                </tr>)}
            </tbody>
        </table> */}

        <div className="body-content">
            <div className="body-content__filter">

            </div>

            <div className="body-content_base">
                {dataListPerson.map((item, index) => <div className="information">
                    <div className="information-base">


                        <div className="information__header">
                            <div className="information__header-logo">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="information__header-name">

                                <p>{item.id}</p>
                            </div>
                        </div>
                        <div className="information__body">
                            <div className="information__body-content">
                                <div className="thumb-logo">
                                    <img src={home} alt="" />
                                </div>
                                <div className="if-text">
                                    <p>{item.name}</p>
                                </div>

                            </div>
                            <div className="information__body-content">
                                <div className="thumb-logo">
                                    <img src={phone} alt="" />
                                </div>
                                <div className="if-text">
                                    <p>{item.hobby}</p>
                                </div>
                            </div>
                        </div>
                        <div className="information__footer">
                            <div className="information__footer-edit">
                                <button class="button-two" onClick={handleClickUpdate}><span><a className="button" href="#popup1">Edit</a></span></button>
                            </div>
                            
                            <div className="information__footer-delete">
                                <button onClick={() => dispatch({
                                    type: "DELETE_PERSON",
                                    payload: item.id
                                })}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}
export default ListPersonComponent;