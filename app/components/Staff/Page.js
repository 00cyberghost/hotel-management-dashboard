/* eslint-disable @next/next/no-async-client-component */
"use client"
import Link from "next/link"
import { useAdmin } from "@/app/hooks/admin"
import Confirm from "@/app/components/SweetAlert/Confirm"
import Loading from "../Loading/Page"
import { useState } from "react"

export default function Staff() {

    const [openConfirmState, setOpenConfirmState] = useState(null)
    const [openConfirmId, setOpenConfirmId] = useState(null)
    const  resetOpenconfirmState = (state) => setOpenConfirmState(state)

    const { AdminStaffList,AdminDeleteStaff } = useAdmin();

    const {user:staffs, isLoading, error} = AdminStaffList();

    const handleDate = (date) =>  {

        return new Date(date).toLocaleDateString(undefined,{year: 'numeric',month: 'short',day: '2-digit'})
    
        

        //const a = date.toDateString()

        //let d = new Date(date)

        //return dat
    }
    
    //toggle the confirm component and pass the id of the element where the delete button was clicked
    const initConfirm = (id) => {

        setOpenConfirmId(id)

        setOpenConfirmState(true)

    }
    
    //response gotten from confirmation of the confirm component
    //the user accepted to delete and the id of the component to be deleted is passed
    const openConfirmResponse = async (id) => {
        
        //initiate delete
        const {data,status} = await AdminDeleteStaff(id);
        
        //hide the table row from the dom
        document.getElementById(id).parentElement.parentElement.classList.add('d-none')
        
        //show the table row from the dom
        if(status !== 200) {
            
            //restore the hidden row
            document.getElementById(id).parentElement.parentElement.classList.remove('d-none')

            Swal.fire({
                icon: "warning",
                title: "Unable to complete operation. Reversing changes",
                showConfirmButton: false,
                timer: 1500
            })
        }
        
    }

    

    

  
    return (
    
    <>
    	{/* Content body start */}

        <div className="content-body">
            
            <div className="container-fluid">
            
                <div className="row">
                    <div className="col-xl-12">
                        <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                            <div className="card-tabs mt-3 mt-sm-0">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#All" role="tab">All Staffs</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="btn btn-primary mt-3 radius-btn" ><i className="far fa-file-word me-2"></i>Generate Report</a>
                            
                        </div>
                        <div className="tab-content">	
                            <div className="tab-pane active show" id="All">
                                <div className="table-responsive">
                                    <table className="table check-data card-table guest-table display mb-4 dataTablesCard table-responsive-lg" id="guestTable-all">
                                        <thead>
                                            <tr>
                                                <th className="bg-none">
                                                    <div className="form-check style-1">
                                                        <input className="form-check-input checkAll" type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>Staff</th>
                                                <th>Job Desk</th>
                                                <th>Schedule</th>
                                                <th>Contact</th>
                                                <th>Role</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {staffs ? staffs.map((staff) => {
                                                return (
                                                    <>
                                                    <tr key={staff.id}>
                                                        <td>
                                                            <div className="form-check style-1">
                                                                <input className="form-check-input checkAll" type="checkbox" value="" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="concierge-bx">
                                                                <img className="me-3 rounded" src="/assets/images/avatar/pic1.jpg" alt="" />
                                                                <div>
                                                                    <span className="text-primary">{ staff.gender }</span>
                                                                    <h4 className="mt-1"><a className="text-black" href="guest_detail.html">{ staff.name }</a></h4>
                                                                    <span className="fs-14">Join on { handleDate(staff.created_at) }</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="job-desk">
                                                            <div>
                                                                <span className="fs-16">{ staff.job_description }</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <h5 className="font-w600">Tuesday, Friday, Sunday</h5>
                                                                <span>08:00 AM - 04:00 PM</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-nowrap">
                                                                <span className="text-black font-w500"><i className="fas fa-phone-volume me-2 text-primary"></i>{ staff.phone }</span>
                                                                <p className="mt-1">{ staff.email }</p>
                                                                <p className="mt-1 text-black">{ staff.address?.slice(0,30) }...</p>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-danger font-w600">{ staff.role }</span></td>
                                                        <td>
                                                            <Link href={`/admin/edit_staff/${staff.id}`} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-pencil"></i></Link>
                                                            <a href="javascript:void()" id={staff.id} onClick={() => initConfirm(staff.id)} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    </>
                                                )
                                            }) : <Loading />}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

	{/* Content body end */}

    {openConfirmState && 
        <Confirm 
        openConfirmstate={openConfirmState} 
        openConfirmId={openConfirmId} 
        resetOpenconfirmState={resetOpenconfirmState}
        openConfirmResponse={openConfirmResponse}
        title="Are You Sure you Want To Delete"
        text="This action when done cannot be undone" />}


    </>
  )
}
