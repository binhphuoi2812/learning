import React, { Fragment, useEffect, useState } from 'react'

export const GotApi = () => {


    const [state, setState] = useState({
        response: {
            "recordsTotal": 0,
            "recordsFiltered": 0,
            "data": [

            ]
        },
        search: {
                "start": 0,
                "length": 10,
                
                    "value": "a"
                
            }
    })


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "Cookie_1=value; JSESSIONID=D1BBDC35172D7CA66EB4D1E6DEE5A272");

        var raw = JSON.stringify(state.search);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/category/search", requestOptions)
            .then(rsp => rsp.json())
            .then( (result) => {
                setState({
                    ...state.response,
                    response : result
                })
            })
            .catch(error => console.log('error', error));
    })

    return <div>
        <SearchFormCategory></SearchFormCategory>
        <TableCategory data={state.response.data}></TableCategory>
    </div>
}

const SearchFormCategory = () => {

    return <div>

    </div>
}

const TableCategory = (props) => {
    return <Fragment>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    }

                    )
                }

            </tbody>

        </table>
    </Fragment>
}

