import Link from "next/link"
import { useContext,useEffect } from "react"
import { AppContext } from "@/app/layout"

export default function Manager() {

    useEffect(() => {

        setTimeout(() => loadMenus(),1000)
    },[])

    const { user,logout } = useContext(AppContext)
    
  return (
    
           

           <div className="deznav">
           <div className="deznav-scroll">
               <ul className="metismenu" id="menu">
                   <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                           <i className="flaticon-025-dashboard"></i>
                           <span className="nav-text">Dashboard</span>
                       </a>
                       <ul aria-expanded="false">
                           <li><Link href="/management">Dashboard Light</Link></li>
                       </ul>

                   </li>
                   <li>
                        <Link className="ai-icon" href="/management/booking" aria-expanded="false">
                           <i className="fas fa-archive"></i>
                           <span className="nav-text">BOOKING</span>
                       </Link>
                   </li>
                   <li><Link className="ai-icon" href="/management/room_list" aria-expanded="false">
                       <i className="fas fa-house"></i>
                           <span className="nav-text">ROOMS</span>
                       </Link>
                   </li>
                   <li><Link className="ai-icon" href="/management/staff_list" aria-expanded="false">
                           <i className="fas fa-users"></i>
                           <span className="nav-text">STAFFS</span>
                       </Link>
                   </li>
                   <li>
                        <Link className="ai-icon" href="/management/guest_list" aria-expanded="false">
                           <i className="fas fa-user"></i>
                           <span className="nav-text">GUEST LIST</span>
                       </Link>
                   </li>
                   <li>
                        <Link className="ai-icon" href="/management/refund_list" aria-expanded="false">
                           <i className="fas fa-minus"></i>
                           <span className="nav-text">REFUND LIST</span>
                       </Link>
                   </li>
                   <li>
                        <Link className="ai-icon" href="/management/makeup_list" aria-expanded="false">
                           <i className="fas fa-dollar"></i>
                           <span className="nav-text">MAKE UP List</span>
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
