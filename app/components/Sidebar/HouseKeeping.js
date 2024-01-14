import Link from "next/link"

export default function HouseKeeping() {
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
