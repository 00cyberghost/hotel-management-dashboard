export default function addRoom() {
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
                                        <h4 className="text-primary">Add a room</h4>
                                        <form>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Number</label>
                                                    <input type="number" placeholder="1" className="form-control" />
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Type</label>
                                                    <input type="text" placeholder="Queen A-2345" className="form-control" />
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Capacity</label>
                                                    <input type="number" placeholder="2" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Bed Type</label>
                                                    <select className="form-control default-select wide" id="inputState">
                                                        <option selected="">Choose...</option>
                                                        <option>Single</option>
                                                        <option>Double</option>
                                                        <option>King</option>
                                                        <option>Queen</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>

                                                    
                                                    </select>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Number of bathroom</label>
                                                    <input type="number" placeholder="1" className="form-control" />
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Kitchen</label>
                                                    <select className="form-control default-select wide" id="inputState">
                                                        <option selected="">Choose...</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Description</label>
                                                <textarea type="text" placeholder="Describe the room" rows="8" className="form-control"></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Price</label>
                                                <input type="number" placeholder="3000"  className="form-control" />
                                            </div>
                                            
                                            
                                            <button className="btn btn-primary" type="submit">Update Room</button>
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
