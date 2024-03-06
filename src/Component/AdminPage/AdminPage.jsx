/* eslint-disable no-unused-vars */
import React, { useContext , useState} from 'react'
import Css from "./AdminPage.module.css"
import SideNav from '../SideNav/SideNav'
import Datacontext from '../../Context/Datacontext/DataContext'
import UserData from '../UserData/UserData'
import AddEmployee from '../AddEmployee/AddEmployee'
import Dashboard from '../Dashboard/Dashboard'

function AdminPage() {

  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const handleNavItemClick = (component) => {
    setSelectedComponent(component);
  };
  const a = useContext(Datacontext)

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'userData':
        return <UserData  onNavItemClick={handleNavItemClick}/>;
      case 'addEmployee':
        return <AddEmployee onNavItemClick={handleNavItemClick}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={Css.AdminPageWrapper}>
        <h1>Admin Dashborad {a.userType.name}</h1>
        <div className={Css.ComponentWrapper}>
        <SideNav onNavItemClick={handleNavItemClick} />
        {renderComponent()}
        </div>
      </div>
    </>
  )
}

export default AdminPage