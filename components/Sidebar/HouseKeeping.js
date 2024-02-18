import Link from "next/link"
import { useContext,useEffect } from "react"
import { AppContext } from "@/app/layout"

export default function HouseKeeping() {

    useEffect(() => {

        setTimeout(() => loadMenus(),1000)
    },[])

    const { user,logout } = useContext(AppContext)

  return (
    
           

           <div className="deznav">
           <div className="deznav-scroll">
               <ul className="metismenu" id="menu">
                   <li>
                        <Link className="ai-icon" href="/housekeeping" aria-expanded="false">
                            <i className="flaticon-025-dashboard"></i>
                            <span className="nav-text">Rooms</span>
                        </Link>
                   </li>

                   <li>
                        <Link className="ai-icon" href="/housekeeping/dashboard" aria-expanded="false">
                            <i className="flaticon-025-dashboard"></i>
                            <span className="nav-text">Dashboard</span>
                        </Link>
                   </li>
                   
                   <li>
                        <a onClick={logout} className="ai-icon" href="#" aria-expanded="false">
                           <i className="fas fa-power-off"></i>
                           <span className="nav-text">LOG OUT</span>
                       </a>
                   </li>
                   
               </ul>
               
           </div>
       </div>


  )
}
