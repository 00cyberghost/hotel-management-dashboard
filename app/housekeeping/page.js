import Link from "next/link"


export default function HouseKeeping() {

  // if ([`/dashboard`].includes(appProps.router.pathname))
  return (
    
    <div className="content-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Room Data</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th>ROOM NO.</th>
                                        <th>STATUS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td><strong>542</strong></td>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            Vacant, Ready
                                          </div>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <Link href="/housekeeping/room_status" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil"></i></Link>
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
