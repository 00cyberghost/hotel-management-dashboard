import Link from "next/link"

export default function ViewGuest() {
  return (
    
    // Content body start
    
    <div class="content-body">
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-9 col-xxl-8">
                    <div class="card">	
                        <div class="card-header border-0 pb-0">
                            <h4 class="card-title">Current Booking</h4>
                        </div>
                        <div class="card-body">
                            <div class="owl-carousel gallery-carousel owl-theme pb-3">
                                <div class="item">
                                    <img src="/assets/images/hotel/pic1.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="/assets/images/hotel/pic2.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="/assets/images/hotel/pic3.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="/assets/images/hotel/pic4.jpg" alt="" />
                                </div>
                            </div>
                            <div class="d-flex mt-4 flex-wrap">
                                <h4 class="card-title me-auto">Room Facilities</h4>
                                <h5 class="card-title">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</h5>
                            </div>
                        </div>
                        <div class="card-body d-flex pt-0 align-items-center flex-wrap">
                            <div class="d-flex align-items-center me-5 pe-4 mb-xxl-0 mb-2">
                                <span class="key-icon me-3">
                                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clip-rule="evenodd" d="M16.1585 6.41671C16.8932 2.80354 20.0899 0.0833735 23.9168 0.0833737C28.2868 0.0833739 31.8335 3.63004 31.8335 8.00004C31.8335 12.3685 28.2868 15.9167 23.9168 15.9167C20.0899 15.9167 16.8932 13.195 16.1585 9.58337L9.66683 9.58337L9.66683 12.75C9.66683 13.6225 8.9575 14.3334 8.0835 14.3334C7.2095 14.3334 6.50016 13.6225 6.50016 12.75L6.50016 9.58337L3.3335 9.58337L3.3335 12.75C3.3335 13.6225 2.62416 14.3334 1.75016 14.3334C0.876161 14.3334 0.166828 13.6225 0.166828 12.75L0.166828 8.00004C0.166828 7.12446 0.876162 6.41671 1.75016 6.41671L16.1585 6.41671ZM28.6668 8.00004C28.6668 10.6205 26.5388 12.75 23.9168 12.75C21.2948 12.75 19.1668 10.6205 19.1668 8.00004C19.1668 5.37804 21.2948 3.25004 23.9168 3.25004C26.5388 3.25004 28.6668 5.37804 28.6668 8.00004Z" fill="white"/>
                                    </svg>
                                </span>
                                <div>
                                    <h5 class="text-primary">Booking ID #0052466623</h5>
                                    <h4 class="card-title mb-0">King Deluxe B-23</h4>
                                </div>
                            </div>
                            <div class="d-sm-flex d-block align-items-center">
                                <div class="me-5 mb-sm-0 mb-3">
                                    <p class="mb-2"><i class="far fa-user scale3 me-3"></i>Room Capacity</p>
                                    <h4 class="mb-0 card-title">3-5 Person</h4>
                                </div>
                                <div class="me-5 mb-sm-0 mb-3">
                                    <p class="mb-2"><i class="fas fa-bed scale3 me-3"></i>Bed Type</p>
                                    <h4 class="mb-0 card-title">Double</h4>
                                </div>
                                <div>
                                    <p class="mb-2"><i class="far fa-calendar-minus scale3 me-3"></i>Booking Date</p>
                                    <h4 class="mb-0 card-title">Oct 25th - 28th, 2023</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-xxl-4">
                    <div class="card profile-card">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <img src="/assets/images/profile/10.jpg" alt="" class="rounded profile-img me-4" />
                                <div>
                                    <h5 class="text-primary">#GS-2234</h5>
                                    <h4 class="mb-0">Louis Khan</h4>
                                </div>
                            </div>
                            <div class="row mt-4 pt-3">
                                <div class="col-8">
                                    <a class="btn btn-dark light btn-block" href="javascript:void(0);">Edit Profile</a>
                                </div>
                                <div class="col-4">
                                    <a class="btn btn-danger btn-block" href="javascript:void(0);"><i class="far fa-times-circle scale3"></i></a>
                                </div>
                            </div>
                            <ul class="user-info-list">
                                <li>
                                    <i class="fas fa-phone-volume"></i>
                                    <span>+12 3456 678</span>
                                </li>
                                <li>
                                    <i class="far fa-envelope"></i>
                                    <span class="overflow-hidden">louiskhan002@mail.com</span>
                                </li>
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>New Avenue Street Corner South London 224151</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="d-flex align-items-center rooms flex-wrap">
                        <h4 class="me-auto mb-3">History Booking</h4>
                        <div class="mb-3">
                            <a href="javascript:void(0);" class="btn btn-primary  radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-1"><i class="fas fa-calendar-times me-2"></i>Date Filter</a>
                            <a href="javascript:void(0);" class="btn btn-primary  radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="far fa-file-word me-2"></i>Generate Report</a>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table card-table guest-table  display mb-4 dataTablesCard booking-table table-responsive-lg " id="guestTable-all">
                            <thead>
                                <tr>
                                    <th class="bg-none">
                                        <div class="form-check style-1">
                                            <input class="form-check-input" type="checkbox" value="" id="checkAll" />
                                        </div>
                                    </th>
                                    <th>Room Name</th>
                                    <th>Bed Type</th>
                                    <th>Room Floor</th>
                                    <th>Room Facility</th>
                                    <th>Book Date</th>
                                    <th class="bg-none"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="form-check style-1">
                                            <input class="form-check-input" type="checkbox" value="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="guest-bx">
                                            <img class="me-3" src="/assets/images/hotel/pic11.jpg" alt="" />
                                            <div>
                                                <span class="text-primary">#0005</span>
                                                <h4 class="mb-0 mt-1"><a class="text-black" href="guest_detail.html">Queen A-0001</a></h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="fs-16">Single Bed</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="fs-16">Floor G-05</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            
                                            <span class="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5>Oct 29th, 2023</h5>
                                            <span class="fs-14">08:29 AM</span>
                                        </div>
                                    </td>
                                    <td>
                                        <Link href="/admin/view_guest" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-pencil"></i></Link>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check style-1">
                                            <input class="form-check-input" type="checkbox" value="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="guest-bx">
                                            <img class="me-3" src="/assets/images/hotel/pic22.jpg" alt="" />
                                            <div>
                                                <span class="text-primary">#0002</span>
                                                <h4 class="mb-0 mt-1"><a class="text-black" href="guest_detail.html">Queen A-0002</a></h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="fs-16">Double Bed</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="fs-16">Floor G-05</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            
                                            <span class="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5>Oct 29th, 2023</h5>
                                            <span class="fs-14">08:29 AM</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="dropdown dropstart">
                                            <a href="javascript:void(0);" class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="javascript:void(0);">Edit</a>
                                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check style-1">
                                            <input class="form-check-input" type="checkbox" value="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="guest-bx">
                                            <div id="carouselExampleControls" class="carousel slide me-3" data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="/assets/images/hotel/pic11.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="/assets/images/hotel/pic22.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="/assets/images/hotel/pic33.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                    <i class="fas fa-chevron-left text-black"></i>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                    <i class="fas fa-chevron-right text-black"></i>
                                                </button>
                                            </div>
                                            <div>
                                                <span class="text-primary">#0004</span>
                                                <h4 class="mb-0 mt-1"><a class="text-black" href="guest_detail.html">Deluxe B-0004</a></h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="fs-16">Double Bed</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="fs-16">Floor G-05</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            
                                            <span class="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5>Oct 29th, 2023</h5>
                                            <span class="fs-14">08:29 AM</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="dropdown dropstart">
                                            <a href="javascript:void(0);" class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="javascript:void(0);">Edit</a>
                                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
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
