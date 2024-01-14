import Link from "next/link"

export default function room_status() {
  return (
    

    <div className="content-body">
        <div className="container-fluid">

        <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Room Status</h4>
                        </div>
                        <div className="card-body">
                            <div className="basic-form">
                                <form>
                                    <div className="mb-3">
                                    <label for="room_status">Change Room Status</label>
                                    <select className="default-select form-control form-control wide" id="room_status" name="room_status">
                                        <option>Vacant, Ready</option>
                                        <option>Vacant, Under Repair</option>
                                        <option>Vacant, Unclean</option>
                                        <option>Occupied, Clean</option>
                                        <option>Vacant, Clean</option>
                                    </select>
                                    </div>
                                    <div className="mb-5">
                                    <label for="report">Report</label>
                                        <textarea className="form-control" rows="8" id="report" name="report"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

  )
}
