import Link from "next/link"

export default function CompleteBooking() {
  return (
    
    <div className="content-body">
       
        <div className="container-fluid">
            <div className="row mt-5 gap-5">

                <div className="col-xl-5 col-lg-5 p-3 card">
                    <h3 className="text-center p-3">Customer Details</h3>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="ozor clinton" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="mb-3">
                            <label for="phone" className="form-label">Phone number</label>
                                <input type="tel" id="phone" className="form-control" placeholder="+234 906 3213" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="00cybaghost@gmail.com" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <button className="btn btn-primary w-full w-100 full">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 p-3 card">
                    <h3 className="text-center p-3">Order Description</h3>
                    <div className="table-responsive">
                        <table className="table table-responsive-md p-5">
                            <tbody>
                                <tr className="p-3">
                                    <td><strong className="text-black">Total number of rooms</strong></td>
                                    <td className="text-end">1</td>
                                    
                                </tr>
                                <tr className="p-3">
                                    <td><strong className="text-black">Duration</strong></td>
                                    <td className="text-end">3</td>
                                    
                                </tr>
                                <tr className="p-3"> 
                                    <td><strong className="text-black">Total amount to pay</strong></td>
                                    <td className="text-end">$30000</td>
                                    
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
