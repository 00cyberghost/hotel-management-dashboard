/* eslint-disable @next/next/no-async-client-component */
"use client"
import Link from "next/link"
import { useAdmin } from "@/hooks/admin"
import Loading from "@/components/Loading/Page"
import { useState } from "react"
import { openConfirmResponse,handleDate } from "@/lib/utils"

export default function Staff() {

   

    const { AdminStaffList,AdminDeleteStaff } = useAdmin();

    const {user:staffs, isLoading, error} = AdminStaffList();


  
    return (
    
    
    	
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
                                                        <td id={staff.id}>
                                                            <Link href={`/admin/edit_staff/${staff.id}`} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-pencil"></i></Link>
                                                            <a href="javascript:void()" onClick={() => openConfirmResponse(staff.id,AdminDeleteStaff)} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
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

  )
}
