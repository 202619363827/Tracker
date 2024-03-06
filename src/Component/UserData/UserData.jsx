/* eslint-disable react/prop-types */
import React from 'react'
import Css from "./UserData.module.css"
import EmployeeData from '../EmployeeData/EmployeeData'
import AddEmployee from '../AddEmployee/AddEmployee'

function UserData({onNavItemClick}) {

    const handleClick = (component) => {
        onNavItemClick(component);
      };

    return (
        <>
            <div className={Css.tableWrapper}>
                <button onClick={() => handleClick('addEmployee')}>Add An Employee</button>
                <table className={Css.table}>
                    <thead>
                        <tr className={Css.tr}>
                            <th>NO.</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>UserName</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EmployeeData/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserData