import React,{useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'
import {motion} from "framer-motion"
import UserContext from '../../../UserContext'
import home from '../../../assets/icons/home.png'; // with import
import documents from '../../../assets/icons/documents.png'; // with import
import calendrier from '../../../assets/icons/calendrier.png'; // with import

export default function SideBar(props) {
      const {userAuth} = useContext(UserContext)
    // const [showSidebar,setShowSidebar] = useState(false)
    const sidebarScroll = (
        <div className='scrollSidebar'>
            <div className='listScrollDocument'>Demande conget</div>
            <div className='listScrollDocument'>Demande absence</div>
            <div className='listScrollDocument'>Arrêt maladie</div>
        </div>

    )
    const styles = {
        width : props.toggle ? "50px":"200px",
    }
    console.log('Sidebar')
  return (
      <div  className='sidebar' style={styles}>
        <div className='menu'>
        </div>
        <ul className='menuSide' >
        <li className='sideNav'><NavLink to="/"><img src={home} alt="" /> {props.toggle? "":<span className="routeSide"> Acceuil</span>}</NavLink></li>
            {userAuth.user_role ==='manager' ?(<li className='sideNav'><NavLink to="cola"><img src={documents} alt="" /> {props.toggle? "":<span className="routeSide"> Collaborateur</span>}</NavLink></li>):''}
            {userAuth.user_role ==='manager' ?(<li className='sideNav'><NavLink to="absenceG"><img src={calendrier} alt="" /> {props.toggle? "":<span className="routeSide">Gestion Absence</span>}</NavLink></li>):''}
            {userAuth.user_role ==='manager' ?(<li className='sideNav'><NavLink to="documentG"><img src={documents} alt="" /> {props.toggle? "":<span className="routeSide">Gestion Documents</span>}</NavLink></li>):'' }
            {userAuth.user_role ==='employee' ? (<li className='sideNav sideNavDocumentD'><NavLink to="documentD"><img src={documents} alt="" /> {props.toggle? "":<span className="routeSide">Documents</span>} </NavLink></li>):'' }
            {userAuth.user_role ==='employee' ? (<li  className='sideNav sideNavDocumentD'><NavLink to="congesAbsenceD"><img src={calendrier} alt="" /> {props.toggle? "":<span className="routeSide">Congés & absences</span>} </NavLink></li>):'' }
        </ul>
          
      </div>

  )
}
