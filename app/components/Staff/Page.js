import Link from "next/link"

export default function Staff() {
  return (
    
    <>
    	{/* Content body start */}

        <div className="content-body">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                            <div className="card-tabs mt-3 mt-sm-0">
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
                            <a href="javascript:void(0);" className="btn btn-primary mt-3 radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-file-word me-2"></i>Generate Report</a>
                            
                        </div>
                        <div className="tab-content">	
                            <div className="tab-pane active show" id="All">
                                <div className="table-responsive">
                                    <table className="table check-data card-table guest-table display mb-4 dataTablesCard table-responsive-lg" id="guestTable-all">
                                        <thead>
                                            <tr>
                                                <th className="bg-none">
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll" type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>Employee Name</th>
                                                <th>Job Desk</th>
                                                <th>Schedule</th>
                                                <th>Contact</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic1.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00025</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Rio Fernandez</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <Link href="/admin/edit_staff" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-pencil"></i></Link>
                                                    <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic2.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00026</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Thomas Djons</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Monday, Friday, Sunday</h5>
                                                        <span>09:00 AM - 10:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic3.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00027</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>07:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic4.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00028</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">James Junaidi</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic5.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00029</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <div className="tab-content">	
                            <div className="tab-pane" id="Pending">
                                <div className="table-responsive">
                                    <table className="table card-table check-data guest-table display mb-4 dataTablesCard table-responsive-lg" id="guestTable-all-1">
                                        <thead>
                                            <tr>
                                                <th className="bg-none">
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll " type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>Employee Name</th>
                                                <th>Job Desk</th>
                                                <th>Schedule</th>
                                                <th>Contact</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic1.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00030</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Rio Fernandez</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic2.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00031</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Thomas Djons</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic3.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00032</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic4.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00032</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">James Junaidi</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic5.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00033</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <div className="tab-content">	
                            <div className="tab-pane" id="Booked">
                                <div className="table-responsive">
                                    <table className="table card-table check-data display mb-4 dataTablesCard table-responsive-lg" id="guestTable-all-2">
                                        <thead>
                                            <tr>
                                                <th className="bg-none">
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll" type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>Employee Name</th>
                                                <th>Job Desk</th>
                                                <th>Schedule</th>
                                                <th>Contact</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic1.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00035</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Rio Fernandez</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic2.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00037</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Thomas Djons</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic3.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00038</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic4.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00040</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">James Junaidi</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic5.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00041</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <div className="tab-content">	
                            <div className="tab-pane" id="Canceled">
                                <div className="table-responsive">
                                    <table className="table card-table check-data display mb-4 dataTablesCard table-responsive-lg" id="guestTable-all-3">
                                        <thead>
                                            <tr>
                                                <th className="bg-none">
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll" type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>Employee Name</th>
                                                <th>Job Desk</th>
                                                <th>Schedule</th>
                                                <th>Contact</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic1.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00044</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Rio Fernandez</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic2.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00050</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Thomas Djons</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic3.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00051</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic4.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00060</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">James Junaidi</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic5.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00061</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <div className="tab-content">	
                            <div className="tab-pane" id="Refund">
                                <div className="table-responsive">
                                    <table className="table card-table check-data display mb-4 dataTablesCard table-responsive-lg" id="guestTable-all-4">
                                        <thead>
                                            <tr>
                                                <th className="bg-none">
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll" type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>Employee Name</th>
                                                <th>Job Desk</th>
                                                <th>Schedule</th>
                                                <th>Contact</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic1.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00062</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Rio Fernandez</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic2.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00063</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Thomas Djons</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic3.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00066</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic4.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00067</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">James Junaidi</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-danger font-w600">INACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                                    <div className="concierge-bx">
                                                        <img className="me-3 rounded" src="/public/assets/images/avatar/pic5.jpg" alt="" />
                                                        <div>
                                                            <span className="text-primary">#EMP-00068</span>
                                                            <h4 className="mt-1"><a className="text-black" href="guest_detail.html">Margaretha</a></h4>
                                                            <span className="fs-14">Join on January 21th, 2023</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="job-desk">
                                                    <div>
                                                        <span className="fs-16">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                        <span>08:00 AM - 04:00 PM</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-nowrap">
                                                        <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>+12 3456 678</span>
                                                    </div>
                                                </td>
                                                <td><span className="text-success font-w600">ACTIVE</span></td>
                                                <td>
                                                    <div className="dropdown dropstart">
                                                        <a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

	{/* Content body end */}

    {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Concierge Report</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Job Desk</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                                <label className="form-label d-block">Status</label>
                            <select className="nice-select me-sm-2 default-select form-control wide" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">ACTIVE</option>
                                <option value="2">INACTIVE</option>
                            </select>
                        </div>
                        <div className="col-xl-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput2" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Rio Fernandez" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}
