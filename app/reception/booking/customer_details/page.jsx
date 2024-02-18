import Link from "next/link"

export default function CustomerDetails() {
  return (
    
    <div className="content-body">
        <div className="container-fluid">

        <div class="row">
            <div class="col-xl-6 col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Customer Details</h4>
                    </div>
                    <div class="card-body">
                        <div class="basic-form">
                            <form>
                                <div class="mb-3">
                                    <input type="text" class="form-control input-default " placeholder="input-default" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control input-rounded" placeholder="input-rounded" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Order Description</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-4 col-xxl-6 col-6">
                                <div class="form-check custom-checkbox mb-3">
                                    <input type="checkbox" class="form-check-input" id="customCheckBox1" required />
                                    <label class="form-check-label" for="customCheckBox1">Checkbox 1</label>
                                </div>
                            </div>
                            <div class="col-xl-4 col-xxl-6 col-6">
                                <div class="form-check custom-checkbox mb-3 checkbox-info">
                                    <input type="checkbox" class="form-check-input" checked id="customCheckBox2" required />
                                    <label class="form-check-label" for="customCheckBox2">Checkbox 2</label>
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
