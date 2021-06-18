import React, { Fragment, useState } from 'react';

const Radio = () => {


    const [params, setParam] = useState({
        username: "",
        password: "",
        city: "",
        favourites : ["Cafe"],
        gender: "M"
    });

    const HandleChange = (e) => {

        // const name = e.target.name;

        // const value = e.target.value

        setParam({
            ...params,
            [e.target.name]: e.target.value,

            
        })
    
    }

   
    const setFavourites = (event) => {
        const value = event.target.value

        if (event.target.checked) {
            setParam(() => {
                //return {favourites: prevState.favourites.concat([value])}
            

                return {...params, favourites: [...params.favourites, value] }
            })
        }
         else {
            let favourites = params.favourites.filter(item => {
                return item !== value
            })

            setParam({ ...params,favourites })
        }
    }

    console.log(params)

    return <Fragment>
        <>
        <input type="text" name="username" value={params.username} onChange={HandleChange} />
        <p>{params.username}</p>
        <input type="password" name="password" value={params.password} onChange={HandleChange} />
        <p>{params.password}</p>

        <select value={params.city} name="city" onChange={HandleChange}>
            <option value="HN">Ha Noi</option>
            <option value="HCM">HCM</option>
            <option value="DN">Da Nang</option>
        </select>

        <p>Enter: {params.city}</p>

        <div>
            <input type="radio" name="gender" value="M" defaultChecked={params.gender == 'M'} onChange={HandleChange} /> Nam
                <input type="radio" name="gender" value="F" defaultChecked={params.gender == 'F'} onChange={HandleChange} /> Nu
                <p>Enter: {params.gender}</p>
        </div>

        <div>
            <input type="checkbox" name="favourites" value="Cafe" defaultChecked={params.favourites.indexOf("Cafe") !== -1} onChange={setFavourites} /> Cafe
                <input type="checkbox" name="favourites" value="Phim" defaultChecked={params.favourites.indexOf("Phim") !== -1} onChange={setFavourites} /> Phim
                <input type="checkbox" name="favourites" value="Music" defaultChecked={params.favourites.indexOf("Music") !== -1} onChange={setFavourites} /> Music
                <p>Enter: {params.favourites.toString()}</p>
        </div>
        </>
    </Fragment>
}

export default Radio;