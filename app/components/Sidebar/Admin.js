import Link from "next/link"

export default function Admin() {
  return (
    
           

           <div className="deznav">
           <div className="deznav-scroll">
               <ul className="metismenu" id="menu">
                   <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                           <i className="flaticon-025-dashboard"></i>
                           <span className="nav-text">Dashboard</span>
                       </a>
                       <ul aria-expanded="false">
                           <li><Link href="/admin">Dashboard Light</Link></li>
                       </ul>

                   </li>
                   <li>
                        <Link className="ai-icon" href="/admin/booking" aria-expanded="false">
                           <i className="fas fa-archive"></i>
                           <span className="nav-text">BOOKINGS</span>
                       </Link>
                   </li>
                   <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                       <i className="fas fa-house"></i>
                           <span className="nav-text">ROOMS</span>
                       </a>
                       <ul aria-expanded="false">
                           <li><Link href="/admin/add_room">ADD ROOM</Link></li>
                           <li><Link href="/admin/room_list">ROOM LIST</Link></li>
                           
                           
                       </ul>
                   </li>
                   <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                           <i className="fas fa-users"></i>
                           <span className="nav-text">STAFFS</span>
                       </a>
                       <ul aria-expanded="false">
                           <li><Link href="/admin/add_staff">ADD STAFF</Link></li>
                           <li><Link href="/admin/staff_list">STAFF LIST</Link></li>
                       </ul>
                   </li>
                   <li>
                        <Link className="ai-icon" href="/admin/guest_list" aria-expanded="false">
                           <i className="fas fa-user"></i>
                           <span className="nav-text">GUEST LIST</span>
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
