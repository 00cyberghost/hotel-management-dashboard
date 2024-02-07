import Link from "next/link"

export default function ViewGuest() {
  return (
    
    // Content body start
    
    <div className="content-body">
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-9 col-xxl-8">
                    <div className="card">	
                        <div className="card-header border-0 pb-0">
                            <h4 className="card-title">Current Booking</h4>
                        </div>
                        <div className="card-body">
                            <div className="owl-carousel gallery-carousel owl-theme pb-3">
                                <div className="item">
                                    <img src="/assets/images/hotel/pic1.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/assets/images/hotel/pic2.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/assets/images/hotel/pic3.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/assets/images/hotel/pic4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="d-flex mt-4 flex-wrap">
                                <h4 className="card-title me-auto">Room Facilities</h4>
                                <h5 className="card-title">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</h5>
                            </div>
                        </div>
                        <div className="card-body d-flex pt-0 align-items-center flex-wrap">
                            <div className="d-flex align-items-center me-5 pe-4 mb-xxl-0 mb-2">
                                <span className="key-icon me-3">
                                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clip-rule="evenodd" d="M16.1585 6.41671C16.8932 2.80354 20.0899 0.0833735 23.9168 0.0833737C28.2868 0.0833739 31.8335 3.63004 31.8335 8.00004C31.8335 12.3685 28.2868 15.9167 23.9168 15.9167C20.0899 15.9167 16.8932 13.195 16.1585 9.58337L9.66683 9.58337L9.66683 12.75C9.66683 13.6225 8.9575 14.3334 8.0835 14.3334C7.2095 14.3334 6.50016 13.6225 6.50016 12.75L6.50016 9.58337L3.3335 9.58337L3.3335 12.75C3.3335 13.6225 2.62416 14.3334 1.75016 14.3334C0.876161 14.3334 0.166828 13.6225 0.166828 12.75L0.166828 8.00004C0.166828 7.12446 0.876162 6.41671 1.75016 6.41671L16.1585 6.41671ZM28.6668 8.00004C28.6668 10.6205 26.5388 12.75 23.9168 12.75C21.2948 12.75 19.1668 10.6205 19.1668 8.00004C19.1668 5.37804 21.2948 3.25004 23.9168 3.25004C26.5388 3.25004 28.6668 5.37804 28.6668 8.00004Z" fill="white"/>
                                    </svg>
                                </span>
                                <div>
                                    <h5 className="text-primary">Booking ID #0052466623</h5>
                                    <h4 className="card-title mb-0">King Deluxe B-23</h4>
                                </div>
                            </div>
                            <div className="d-sm-flex d-block align-items-center">
                                <div className="me-5 mb-sm-0 mb-3">
                                    <p className="mb-2"><i className="far fa-user scale3 me-3"></i>Room Capacity</p>
                                    <h4 className="mb-0 card-title">3-5 Person</h4>
                                </div>
                                <div className="me-5 mb-sm-0 mb-3">
                                    <p className="mb-2"><i className="fas fa-bed scale3 me-3"></i>Bed Type</p>
                                    <h4 className="mb-0 card-title">Double</h4>
                                </div>
                                <div>
                                    <p className="mb-2"><i className="far fa-calendar-minus scale3 me-3"></i>Booking Date</p>
                                    <h4 className="mb-0 card-title">Oct 25th - 28th, 2023</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-xxl-4">
                    <div className="card profile-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <img src="/assets/images/profile/10.jpg" alt="" className="rounded profile-img me-4" />
                                <div>
                                    <h5 className="text-primary">#GS-2234</h5>
                                    <h4 className="mb-0">Louis Khan</h4>
                                </div>
                            </div>
                            <div className="row mt-4 pt-3">
                                <div className="col-8">
                                    <a className="btn btn-dark light btn-block" href="javascript:void(0);">Edit Profile</a>
                                </div>
                                <div className="col-4">
                                    <a className="btn btn-danger btn-block" href="javascript:void(0);"><i className="far fa-times-circle scale3"></i></a>
                                </div>
                            </div>
                            <ul className="user-info-list">
                                <li>
                                    <i className="fas fa-phone-volume"></i>
                                    <span>+12 3456 678</span>
                                </li>
                                <li>
                                    <i className="far fa-envelope"></i>
                                    <span className="overflow-hidden">louiskhan002@mail.com</span>
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>New Avenue Street Corner South London 224151</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="d-flex align-items-center rooms flex-wrap">
                        <h4 className="me-auto mb-3">History Booking</h4>
                        <div className="mb-3">
                            <a href="javascript:void(0);" className="btn btn-primary  radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-1"><i className="fas fa-calendar-times me-2"></i>Date Filter</a>
                            <a href="javascript:void(0);" className="btn btn-primary  radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-file-word me-2"></i>Generate Report</a>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table card-table guest-table  display mb-4 dataTablesCard booking-table table-responsive-lg " id="guestTable-all">
                            <thead>
                                <tr>
                                    <th className="bg-none">
                                        <div className="form-check style-1">
                                            <input className="form-check-input" type="checkbox" value="" id="checkAll" />
                                        </div>
                                    </th>
                                    <th>Room Name</th>
                                    <th>Bed Type</th>
                                    <th>Room Floor</th>
                                    <th>Room Facility</th>
                                    <th>Book Date</th>
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
                                        <div className="guest-bx">
                                            <img className="me-3" src="/assets/images/hotel/pic11.jpg" alt="" />
                                            <div>
                                                <span className="text-primary">#0005</span>
                                                <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-0001</a></h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="fs-16">Single Bed</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="fs-16">Floor G-05</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            
                                            <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5>Oct 29th, 2023</h5>
                                            <span className="fs-14">08:29 AM</span>
                                        </div>
                                    </td>
                                    <td>
                                        <Link href="/admin/view_guest" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-pencil"></i></Link>
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
                                        <div className="guest-bx">
                                            <img className="me-3" src="/assets/images/hotel/pic22.jpg" alt="" />
                                            <div>
                                                <span className="text-primary">#0002</span>
                                                <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-0002</a></h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="fs-16">Double Bed</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="fs-16">Floor G-05</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            
                                            <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5>Oct 29th, 2023</h5>
                                            <span className="fs-14">08:29 AM</span>
                                        </div>
                                    </td>
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
                                        <div className="guest-bx">
                                            <div id="carouselExampleControls" className="carousel slide me-3" data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img src="/assets/images/hotel/pic11.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="/assets/images/hotel/pic22.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="/assets/images/hotel/pic33.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                    <i className="fas fa-chevron-left text-black"></i>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                    <i className="fas fa-chevron-right text-black"></i>
                                                </button>
                                            </div>
                                            <div>
                                                <span className="text-primary">#0004</span>
                                                <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Deluxe B-0004</a></h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="fs-16">Double Bed</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="fs-16">Floor G-05</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            
                                            <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5>Oct 29th, 2023</h5>
                                            <span className="fs-14">08:29 AM</span>
                                        </div>
                                    </td>
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

     


  )
}
