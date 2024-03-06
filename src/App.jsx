/* eslint-disable no-unused-vars */
import { Router, BrowserRouter, Route, Link, Routes } from "react-router-dom"
import './App.css'
import LoginPage from "./Component/ContactUs/ContactUs"
import AdminPage from "./Component/AdminPage/AdminPage"
import Home from "./Component/Home/Home"
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute"
import Header from './Component/Header/Header'
import About from './Component/About/About'
import { useNavigate } from "react-router-dom"
import Datastate from "./Context/Datacontext/Datastate"
import EmployeePage from "./Component/EmployeePage/EmployeePage"
import ClientPage from "./Component/ClientPage/ClientPage"
import Dashboard from "./Component/Dashboard/Dashboard"
import Tracker from "./Component/Tracker"
  


function App() {


  return (
    <>

      <BrowserRouter>
        <Datastate>
          <Header />
          <Routes>
          <Route path="/" element={<Tracker />} />

            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/Home" element={<ProtectedRoute Component={Home} />} />
            <Route path="/Admin" element={<ProtectedRoute Component={AdminPage} />} />
            <Route path="/EmployeePage" element={<ProtectedRoute Component={EmployeePage} />} />
            <Route path="/ClientPage" element={<ProtectedRoute Component={ClientPage  } />} />
            <Route path="/About" element={<ProtectedRoute Component={About} />} />
            <Route path="/Dashboard" element={<ProtectedRoute Component={Dashboard} />} />
          </Routes>
        </Datastate>
      </BrowserRouter>
    </>
  )
}

export default App
