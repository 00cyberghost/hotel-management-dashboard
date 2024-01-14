import Link from "next/link"


export default function RefundList() {

  // if ([`/dashboard`].includes(appProps.router.pathname))
  return (
    
    <div className="content-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Refund List</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th>CHANGE STATUS</th>
                                        <th>NAME</th>
                                        <th>DATE</th>
                                        <th>AMOUNT</th>
                                        <th>BOOKING NO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>
                                            <select className="default-select form-control form-control wide" id="room_status" name="room_status">
                                                <option>PENDING</option>
                                                <option>COMPLETED</option>
                                            </select>
                                        </td>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            ozor clinton
                                          </div>
                                        </td>
                                        <td>
                                            23 Nov, 2024
                                        </td>
                                        <td>
                                            $3000
                                        </td>
                                        <td>
                                            104
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
