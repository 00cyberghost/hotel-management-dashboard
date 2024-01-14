export default function addStaff() {
  return (
    // Content body start
    
    <div className="content-body">
        <div className="container-fluid">
            <div className="col-md-12">
                <div className="card h-auto">
                    <div className="card-body">
                        <div className="profile-tab">
                            
                            <div id="profile-settings" className="tab-pane">
                                <div className="pt-3">
                                    <div className="settings-form">
                                        <h4 className="text-primary">Add a staff</h4>
                                        <form>
                                            <div className="row">
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" placeholder="ozor clinton" className="form-control" />
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" placeholder="ozorclinton@gmail.com" className="form-control" />
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Phone Number</label>
                                                    <input type="tel" placeholder="+234 906146" className="form-control" />
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Staff Role</label>
                                                    <select className="form-control default-select wide" id="inputState">
                                                        <option selected="">Choose...</option>
                                                        <option>Admin</option>
                                                        <option>Manager</option>
                                                        <option>Receptionist</option>
                                                        <option>House Keeping</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                          
                                            <div className="mb-3">
                                                <label className="form-label">Job Description</label>
                                                <textarea type="text" placeholder="Describe the room" rows="8" className="form-control"></textarea>
                                            </div>
                                            
                                            
                                            
                                            <button className="btn btn-primary" type="submit">Add Staff</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
   
      
  )
}
