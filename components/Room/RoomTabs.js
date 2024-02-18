"use client"
import Link from "next/link"
import { arrayToString } from "@/lib/utils"
import Loading from "@/components/Loading/Page"


export default function Roomtabs(props) {


    const rooms = props.rooms
    

    


  return (

    <div className="tab-content">	
        <div className="tab-pane active show" id="All">
            <div className="table-responsive">
                <table className="table card-table check-data  display mb-4 dataTablesCard booking-table room-list-tbl table-responsive-lg " id="guestTable-all">
                    <thead>
                        <tr>
                            <th className="bg-none">
                                
                            </th>
                            <th>Room Name</th>
                            <th>Capacity</th>
                            <th>Bed Type</th>
                            <th>Price</th>
                            <th>Room Facility</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms ? rooms.map((room) => {

                        return (
                            <tr key={room.id}>
                                <td>
                                    <div className="form-check style-1">
                                        <input onChange={props.isChecked} price={room.price} tax={room.tax} capacity={room.capacity} className="form-check-input booking-checkbox" type="checkbox" value={room.id} />
                                        
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
                                            <span className="text-primary d-block">#{ room.number }</span>
                                            <h4 className="mb-0 mt-1">{ room.type }</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className="fs-16">{ room.capacity }</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className="fs-16">{ room.bed }</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className="fs-16">{ room.price }</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        
                                        <span className="fs-16">{ room.features?.length > 0 ? arrayToString(room.features) : '' }</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className="d-block text-success">{ room.status }</span>
                                        <span className="fs-14">Oct 24th - 26th</span>
                                    </div>
                                </td>
                                <td id={room.id}>
                                <div className="d-flex">
                                    <Link href={`/admin/view_room/${room.id}`} className="btn btn-primary shadow btn-xs sharp"><i className="fa fa-eye"></i></Link>
                                </div>
                                </td>
                            </tr>
                        )

                    }) : <Loading />}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
