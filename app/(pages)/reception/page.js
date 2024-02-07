"use client"
import { useRouter } from "next/navigation"

export default function Reception() {
    
    //router
    const router = useRouter()

    //check room availability
    const checkAvailability = () => {
        
        //click the close modal button to close the modal
        document.querySelector('.btn-close').click()
        //navigate to available rooms
        router.push('/reception/available_rooms')
    }

    
  return (

    <>
    
    {/* Content body start */}
   
    <div className="content-body">
       
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                        <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#All" role="tab">All Guest (216)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#Pending" role="tab">Pending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#Booked" role="tab">Booked</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#Canceled" role="tab">Canceled</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#Refund" role="tab">Refund</a>
                                </li>
                            </ul>
                        </div>
                        <div className="table-search">
                            <div className="input-group search-area mb-xxl-0 mb-4">
                                <input type="text" className="form-control" placeholder="Search here" />
                                <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
                            </div>
                        </div>
                        <a href="javascript:void(0);" className="btn btn-primary mb-xxl-0 mb-4 radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-file-word me-2"></i>Book A Room</a>
                    </div>
                    <div className="tab-content">	
                        <div className="tab-pane active show" id="All">
                            <div className="table-responsive">
                                <table className="table check-data card-table guest-table display mb-4 dataTablesCard table-responsive-xl " id="guestTable-all">
                                    <thead>
                                        <tr>
                                            <th className="bg-none">
                                                <div className="form-check style-1">
                                                    <input className="form-check-input checkAll" type="checkbox" value="" />
                                                </div>
                                            </th>
                                            <th>Guest</th>
                                            <th>Date Order</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Special Request</th>
                                            <th>Room Type</th>
                                            <th>Status</th>
                                            <th className="bg-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/1.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-2234</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Yonna</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2345</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-danger">Refund</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/2.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-2235</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Mr. John Kipli</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2346</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-dark">Canceled</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/3.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-2236</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Roberto Cr.</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2347</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/4.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-2238</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Tonni Sblak</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2348</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/5.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-2239</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Keanu Repes</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2349</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-warning">Pending</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/6.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22310</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Monalisa</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2350</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/4.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22311</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Tonni Sblak</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2351</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/5.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22312</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Keanu Repes</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2352</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-warning">Pending</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/6.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22313</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Monalisa</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2355</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/4.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22314</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Tonni Sblak</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2356</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/5.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22315</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Keanu Repes</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2357</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-warning">Pending</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/6.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22316</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Monalisa</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link disabled">No Request</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2358</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-success">Booked</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="Pending">
                            <div className="table-responsive">
                                <table className="table check-data card-table default-table display mb-4 dataTablesCard table-responsive-xl " id="guestTable-all-1">
                                    <thead>
                                        <tr>
                                            <th className="bg-none">
                                                <div className="form-check style-1">
                                                    <input className="form-check-input checkAll" type="checkbox" value="" />
                                                </div>
                                            </th>
                                            <th>Guest</th>
                                            <th>Date Order</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Special Request</th>
                                            <th>Room Type</th>
                                            <th>Status</th>
                                            <th className="bg-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/1.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22317</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Yonna</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2360</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-danger">Refund</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>	
                            </div>
                        </div>
                        <div className="tab-pane fade" id="Canceled">
                            <div className="table-responsive">
                                <table className="table check-data card-table default-table display mb-4 dataTablesCard table-responsive-xl " id="guestTable-all-2">
                                    <thead>
                                        <tr>
                                            <th className="bg-none">
                                                <div className="form-check style-1">
                                                    <input className="form-check-input checkAll" type="checkbox" value="" />
                                                </div>
                                            </th>
                                            <th>Guest</th>
                                            <th>Date Order</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Special Request</th>
                                            <th>Room Type</th>
                                            <th>Status</th>
                                            <th className="bg-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/1.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22318</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Yonna</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2361</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-danger">Refund</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>	
                            </div>
                        </div>
                        <div className="tab-pane fade" id="Refund">
                            <div className="table-responsive">
                                <table className="table check-data card-table default-table display mb-4 dataTablesCard table-responsive-xl " id="guestTable-all-3">
                                    <thead>
                                        <tr>
                                            <th className="bg-none">
                                                <div className="form-check style-1">
                                                    <input className="form-check-input checkAll" type="checkbox" value="" />
                                                </div>
                                            </th>
                                            <th>Guest</th>
                                            <th>Date Order</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Special Request</th>
                                            <th>Room Type</th>
                                            <th>Status</th>
                                            <th className="bg-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/1.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22319</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Yonna</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2362</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-danger">Refund</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>	
                            </div>
                        </div>
                        <div className="tab-pane fade" id="Booked">
                            <div className="table-responsive">
                                <table className="table check-data card-table default-table display mb-4 dataTablesCard table-responsive-xl " id="guestTable-all-4">
                                    <thead>
                                        <tr>
                                            <th className="bg-none">
                                                <div className="form-check style-1">
                                                    <input className="form-check-input checkAll" type="checkbox" value="" />
                                                </div>
                                            </th>
                                            <th>Guest</th>
                                            <th>Date Order</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Special Request</th>
                                            <th>Room Type</th>
                                            <th>Status</th>
                                            <th className="bg-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check style-1">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="media-bx">
                                                    <img className="me-3 rounded" src="/public/assets/images/avatar/1.jpg" alt="" />
                                                    <div>
                                                        <span className="text-primary">#GS-22320</span>
                                                        <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Yonna</a></h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Sunday, Oct 24th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 29th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h5>Oct 31th, 2023</h5>
                                                    <span className="fs-14">08:29 AM</span>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" className="btn-link">View Notes</a></td>
                                            <td>
                                                <div>
                                                    <h5>Queen A-2363</h5>
                                                    <span className="fs-14">Room No. 0024</span>
                                                </div>
                                            </td>
                                            <td><span className="text-danger">Refund</span></td>
                                            <td>
                                                <div className="dropdown dropstart">
                                                    <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* modal */}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Booking</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="col-xl-4">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Check In</label>
                        <input type="date" className="form-control" />
                    </div>
                        
                </div>
                <div className="col-xl-4">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Check Out</label>
                        <input type="date" className="form-control" />
                    </div>
                        
                </div>
                <div className="col-xl-4">
                    <div className="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">No Of Person</label>
                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="1" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <button onClick={checkAvailability} className="btn btn-primary full w-100 w-full">Check Availability</button>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    </div>
    
       
    </>
  )
}
