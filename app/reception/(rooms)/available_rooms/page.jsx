import Link from "next/link"

export default function AvailableRooms() {
  return (
    
    <div className="content-body">
          
          <div className="container-fluid">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                          <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                              <ul className="nav nav-tabs" role="tablist">
                                  <li className="nav-item">
                                      <a className="nav-link active" data-bs-toggle="tab" href="#All" role="tab">All Room (457)</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" data-bs-toggle="tab" href="#Pending" role="tab">Available Room (234)</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" data-bs-toggle="tab" href="#Booked" role="tab">Booked (125)</a>
                                  </li>
                              </ul>
                          </div>
                          <div className="table-search">	
                              <div className="input-group search-area mb-xxl-0 mb-4">
                                  <input type="text" className="form-control" placeholder="Search here" />
                                  <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
                              </div>
                          </div>	
                          <a href="javascript:void(0);" className="btn btn-primary mb-xxl-0 mb-4 radius-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-file-word me-2"></i>Book Selected Room(s)</a>
                      </div>
                      <div className="tab-content">	
                          <div className="tab-pane active show" id="All">
                              <div className="table-responsive">
                                  <table className="table card-table check-data  display mb-4 dataTablesCard booking-table room-list-tbl table-responsive-lg " id="guestTable-all">
                                      <thead>
                                          <tr>
                                              <th className="bg-none">
                                                  <div className="form-check style-1">
                                                      <input className="form-check-input checkAll" type="checkbox" value="" />
                                                  </div>
                                              </th>
                                              <th>Room Name</th>
                                              <th>Bed Type</th>
                                              <th>Room Floor</th>
                                              <th>Room Facility</th>
                                              <th>Status</th>
                                              <th>Actions</th>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic11.jpg" alt="" />
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
                                                      <span className="d-block text-success">Available</span>
                                                      <span className="fs-14">Oct 24th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic22.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00011</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00011</a></h4>
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
                                                      <span className="fs-16">Floor G-11</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-danger d-block">Booked</span>
                                                      <span className="fs-14 ">Oct 01th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic33.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00012</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00012</a></h4>
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
                                                      <span className="fs-16">Floor G-12</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Single Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-success d-block">Available</span>
                                                      <span className="fs-14 ">Oct 02th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic11.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00013</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00013</a></h4>
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
                                                      <span className="fs-16">Floor G-13</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="fs-16">AC, Shower, Single Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-danger d-block">Booked</span>
                                                      <span className="fs-14 ">Oct 03th - 26th</span>
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
                                                                  <img src="/public/assets/images/hotel/pic11.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                              <div className="carousel-item">
                                                                  <img src="/public/assets/images/hotel/pic22.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                              <div className="carousel-item">
                                                                  <img src="/public/assets/images/hotel/pic33.jpg" className="d-block w-100" alt="..." />
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
                                                          <span className="text-primary">#00014</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Deluxe B-00014</a></h4>
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
                                                      <span className="text-success">Available</span>
                                                      
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
                      <div className="tab-content">	
                          <div className="tab-pane" id="Pending">
                              <div className="table-responsive">
                                  <table className="table card-table check-data  display mb-4 dataTablesCard booking-table room-list-tbl table-responsive-lg" id="guestTable-all-1">
                                      <thead>
                                          <tr>
                                              <th className="bg-none">
                                                  <div className="form-check style-1">
                                                      <input className="form-check-input checkAll" type="checkbox" value="" />
                                                  </div>
                                              </th>
                                              <th>Room Name</th>
                                              <th>Bed Type</th>
                                              <th>Room Floor</th>
                                              <th>Room Facility</th>
                                              <th>Status</th>
                                              <th>Actions</th>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic11.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00015</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00015</a></h4>
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
                                                      <span className="fs-16">Floor G-15</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="d-block text-success">Available</span>
                                                      <span className="fs-14">Oct 05th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic22.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00016</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00016</a></h4>
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
                                                      <span className="fs-16">Floor G-16</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-danger d-block">Booked</span>
                                                      <span className="fs-14 ">Oct 16th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic33.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00017</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00017</a></h4>
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
                                                      <span className="fs-16">Floor G-17</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-success d-block">Available</span>
                                                      <span className="fs-14 ">Oct 17th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic11.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00018</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00018</a></h4>
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
                                                      <span className="fs-16">Floor G-18</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-danger d-block">Booked</span>
                                                      <span className="fs-14 ">Oct 18th - 26th</span>
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
                                                      <div id="carouselExampleControls-1" className="carousel slide me-3" data-bs-ride="carousel">
                                                          <div className="carousel-inner">
                                                              <div className="carousel-item active">
                                                                  <img src="/public/assets/images/hotel/pic11.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                              <div className="carousel-item">
                                                                  <img src="/public/assets/images/hotel/pic22.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                              <div className="carousel-item">
                                                                  <img src="/public/assets/images/hotel/pic33.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                          </div>
                                                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-1" data-bs-slide="prev">
                                                              <i className="fas fa-chevron-left text-black"></i>
                                                          </button>
                                                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-1" data-bs-slide="next">
                                                              <i className="fas fa-chevron-right text-black"></i>
                                                          </button>
                                                      </div>
                                                      <div>
                                                          <span className="text-primary">#00019</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Deluxe B-00019</a></h4>
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
                                                      <span className="fs-16">Floor G-19</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-success">Available</span>
                                                      
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
                      <div className="tab-content">	
                          <div className="tab-pane" id="Booked">
                              <div className="table-responsive">
                                  <table className="table card-table check-data  display mb-4 dataTablesCard booking-table room-list-tbl table-responsive-lg" id="guestTable-all-2">
                                      <thead>
                                          <tr>
                                              <th className="bg-none">
                                                  <div className="form-check style-1">
                                                      <input className="form-check-input checkAll" type="checkbox" value="" />
                                                  </div>
                                              </th>
                                              <th>Room Name</th>
                                              <th>Bed Type</th>
                                              <th>Room Floor</th>
                                              <th>Room Facility</th>
                                              <th>Status</th>
                                              <th>Actions</th>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic11.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00028</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00028</a></h4>
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
                                                      <span className="d-block text-danger">Booked</span>
                                                      <span className="fs-14">Oct 28th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic22.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00029</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00029</a></h4>
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
                                                      <span className="fs-16">Floor G-29</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Single Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-success d-block">Available</span>
                                                      <span className="fs-14 ">Oct 29th - 27th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic33.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#0030</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00030</a></h4>
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
                                                      <span className="fs-16">Floor G-30</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-danger d-block">Booked</span>
                                                      <span className="fs-14 ">Oct 19th - 26th</span>
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
                                                      <img className="me-3" src="/public/assets/images/hotel/pic11.jpg" alt="" />
                                                      <div>
                                                          <span className="text-primary">#00040</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Queen A-00040</a></h4>
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
                                                      <span className="fs-16">Floor G-040</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="fs-16">AC, Shower, Single Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-danger d-block">Booked</span>
                                                      <span className="fs-14 ">Oct 08th - 26th</span>
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
                                                      <div id="carouselExampleControls-2" className="carousel slide me-3" data-bs-ride="carousel">
                                                          <div className="carousel-inner">
                                                              <div className="carousel-item active">
                                                                  <img src="/public/assets/images/hotel/pic11.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                              <div className="carousel-item">
                                                                  <img src="/public/assets/images/hotel/pic22.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                              <div className="carousel-item">
                                                                  <img src="/public/assets/images/hotel/pic33.jpg" className="d-block w-100" alt="..." />
                                                              </div>
                                                          </div>
                                                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-2" data-bs-slide="prev">
                                                              <i className="fas fa-chevron-left text-black"></i>
                                                          </button>
                                                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-2" data-bs-slide="next">
                                                              <i className="fas fa-chevron-right text-black"></i>
                                                          </button>
                                                      </div>
                                                      <div>
                                                          <span className="text-primary">#00050</span>
                                                          <h4 className="mb-0 mt-1"><a className="text-black" href="guest_detail.html">Deluxe B-00050</a></h4>
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
                                                      <span className="fs-16">Floor G-50</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      
                                                      <span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br /> Coffee Set, LED TV, Wifi</span>
                                                  </div>
                                              </td>
                                              <td>
                                                  <div>
                                                      <span className="text-success">Available</span>
                                                      
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
          </div>
      </div>
  )
}
