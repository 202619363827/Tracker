/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Css from './EmployeeData.module.css'

function EmployeeData() {

    const EmployeeData = [
        { id: 1, name: "Tushar", num: 7777788888, email: "tushar@gmail.com", address: "78, main street" },
        { id: 2, name: "sham", num: 6766788888, email: "tushar@gmail.com", address: "78, main street" },
        { id: 3, name: "ram", num: 7576789828, email: "tushar@gmail.com", address: "78, main street" },
    ]

    const data = localStorage.getItem("EmployeeData") ;
    const pars = JSON.parse(data)


    return (
        <>

            {pars.map((Employee, index) => (
                <tr key={index + 1} className={Css.tbody}>
                    <td>{index + 1}</td>
                    <td>{Employee.name}</td>
                    <td>{Employee.Number}</td>
                    <td>{Employee.email}</td>
                    <td>{Employee.Address}</td>
                    <td>{Employee.UserName}</td>
                    <td>{Employee.pass}</td>
                </tr>
            ))}

        </>
    )
}

export default EmployeeData