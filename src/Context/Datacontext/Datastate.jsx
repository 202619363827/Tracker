/* eslint-disable react/prop-types */
import Datacontext from "./DataContext"

// eslint-disable-next-line no-unused-vars
import React from 'react'

function Datastate(props) {

    const Admin = {
        name: 'Rohan',
        department: 'Frontend',
    }

    const employee = {
        name: 'Tushar',
        department: 'Frontend',
    }

    const userType = {name:"User"}

    return (
        <Datacontext.Provider value={{ Admin, employee , userType }}>
            {props.children}
        </Datacontext.Provider>
    )
}

export default Datastate;
