import Link from "next/link"

export default function ChangeRoom() {
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
                                            
                                            <th>CHANGE ROOM NO</th>
                                            <th>NAME</th>
                                            <th>CHECKIN</th>
                                            <th>CHECKOUT</th>
                                            <th>BOOKING NO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="basic-form">
                                                    <select className="default-select form-control form-control wide">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                
                                                </div>
                                            </td>
                                            <td>Dr. Jackson</td>
                                            <td>Dr. Jackson</td>
                                            <td>01 August 2020</td>
                                            <td><strong className="text-black">01</strong></td>
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
