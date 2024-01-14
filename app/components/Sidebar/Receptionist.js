import Link from "next/link"

export default function Receptionist() {
  return (
    
           

           <div className="deznav">
           <div className="deznav-scroll">
               <ul className="metismenu" id="menu">
                   <li><Link className="ai-icon" href="/reception/dashboard" aria-expanded="false">
                           <i className="flaticon-025-dashboard"></i>
                           <span className="nav-text">Dashboard</span>
                       </Link>
                   </li>
                   <li>
                        <Link className="ai-icon" href="/reception/booking" aria-expanded="false">
                           <i className="fas fa-archive"></i>
                           <span className="nav-text">BOOKINGS</span>
                       </Link>
                   </li>
                   <li><Link className="ai-icon" href="/reception/checkin" aria-expanded="false">
                       <i className="fas fa-house"></i>
                           <span className="nav-text">CHECK-IN</span>
                       </Link>
                   </li>
                   <li><Link className="ai-icon" href="/reception/checkout" aria-expanded="false">
                           <i className="fas fa-users"></i>
                           <span className="nav-text">CHECK-OUT</span>
                       </Link>
                   </li>
                   <li>
                        <Link className="ai-icon" href="/reception/change_room" aria-expanded="false">
                           <i className="fas fa-user"></i>
                           <span className="nav-text">CHANGE ROOM</span>
                       </Link>
                   </li>
                   <li>
                        <a className="ai-icon" href="javascript:void()" aria-expanded="false">
                           <i className="fas fa-power-off"></i>
                           <span className="nav-text">LOG OUT</span>
                       </a>
                   </li>
                   
               </ul>
               
           </div>
       </div>


  )
}
