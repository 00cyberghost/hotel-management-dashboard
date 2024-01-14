import Link from "next/link"

export default function Checkout() {
  return (
    
    <div className="content-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Booking Data</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th style={{width:'80px'}}>ROOM NO</th>
                                            <th>STATUS</th>
                                            <th>NAME</th>
                                            <th>BOOKING NO</th>
                                            <th>TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong className="text-black">01</strong></td>
                                            <td>
                                                <div className="basic-form">
                                                    <select className="default-select form-control form-control wide">
                                                        <option>Pending</option>
                                                        <option>Checked In</option>
                                                        <option>Cancelled</option>
                                                    </select>
                                                
                                                </div>
                                            </td>
                                            <td>Dr. Jackson</td>
                                            <td>Dr. Jackson</td>
                                            <td>01 August 2020</td>
                                           
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
