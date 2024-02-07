"use client"

import ImageUploader from "@/app/components/ImageUploader/Page"
import { useAuth } from '@/app/hooks/auth'
import { useAdmin } from "@/app/hooks/admin"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddStaff() {

    //image url
    const path = 'admin/add_user_image'

    const { AdminAddStaff } = useAdmin()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [errors, setErrors] = useState([])
    
    

    
    //submit the form
    const submitForm = async event => {

        event.preventDefault()

        AdminAddStaff({
            name,
            email,
            phone,
            role,
            job_description: jobDescription,
            gender,
            address,
            password,
            image,
            setErrors,
        })
    }
    
    //get value passed from child component
    const appendName = (name) => {
        //set the image name
        setImage(name)
       
    }

   
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
                                        <form onSubmit={submitForm}>
                                            <div className="row">
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" 
                                                        placeholder="ozor clinton" 
                                                        id="name" name="name" 
                                                        className="form-control"
                                                        required
                                                        minLength="4"
                                                        maxLength="40"
                                                        value={name} 
                                                        onChange={event => setName(event.target.value)} />
                                                    <span className='text-danger'>{errors.name}</span>
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" 
                                                        placeholder="ozorclinton@gmail.com" 
                                                        id="email" name="email" 
                                                        className="form-control"
                                                        required
                                                        minLength={3}
                                                        maxLength={60}
                                                        value={email} 
                                                        onChange={event => setEmail(event.target.value)} />
                                                    <span className='text-danger'>{errors.email}</span>
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Phone Number</label>
                                                    <input type="tel" 
                                                        placeholder="+234 906146" 
                                                        name="phone" id="phone" 
                                                        className="form-control"
                                                        value={phone} 
                                                        onChange={event => setPhone(event.target.value)} />
                                                    <span className='text-danger'>{errors.phone}</span>
                                                </div>
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Staff Role</label>
                                                    <select className="form-control 
                                                        default-select wide" 
                                                        id="role" 
                                                        name="role"
                                                        required
                                                        value={role} 
                                                        onChange={event => setRole(event.target.value)}>
                                                        <option defaultValue={''}>Choose...</option>
                                                        <option>Admin</option>
                                                        <option>Manager</option>
                                                        <option>Receptionist</option>
                                                        <option>House Keeping</option>
                                                        <option>Others</option>
                                                    </select>
                                                    <span className='text-danger'>{errors.role}</span>
                                                </div>
                                            </div>
                                          
                                            <div className="mb-5">
                                                <label className="form-label">Job Description</label>
                                                <textarea 
                                                    name="job_description" 
                                                    id="job_description" type="text" 
                                                    placeholder="Job Description" rows="8" 
                                                    className="form-control"
                                                    required
                                                    maxLength={2000}
                                                    value={jobDescription} 
                                                    onChange={event => setJobDescription(event.target.value)}></textarea>
                                                <span className='text-danger'>{errors.job_description}</span>
                                            </div>

                                            <div className="row">
                                                <div className="mb-5 col-md-4">
                                                    <label className="form-label">Gender</label>
                                                    <select 
                                                        className="form-control default-select wide" 
                                                        id="gender" 
                                                        name="gender"
                                                        required
                                                        minLength="4"
                                                        maxLength="6"
                                                        value={gender} 
                                                        onChange={event => setGender(event.target.value)}>
                                                        <option value="" defaultValue={''}>Choose...</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                    <span className='text-danger'>{errors.gender}</span>
                                                </div>
                                                <div className="mb-4 col-md-4">
                                                    <label className="form-label">Address</label>
                                                    <input 
                                                        type="text" 
                                                        placeholder="123 street avenue, new york" 
                                                        id="address" name="address" 
                                                        className="form-control"
                                                        required
                                                        minLength={4}
                                                        maxLength={180}
                                                        value={address} 
                                                        onChange={event => setAddress(event.target.value)} />
                                                    <span className='text-danger'>{errors.address}</span>
                                                </div>
                                                <div className="mb-4 col-md-4">
                                                    <label className="form-label">Password</label>
                                                    <input 
                                                        type="password" 
                                                        name="password" 
                                                        id="password" 
                                                        className="form-control"
                                                        required
                                                        minLength={3}
                                                        maxLength="100"
                                                        value={password} 
                                                        onChange={event => setPassword(event.target.value)} />
                                                    <span className='text-danger'>{errors.password}</span>
                                                </div>
                                               
                                            </div>

                                            <div className="mb-5">
                                                <label className="form-label">Staff image</label>
                                                <ImageUploader appendName={appendName} path={path} />
                                            </div>
                                            
                                            
                                            
                                            <button className="btn btn-primary w-full w-100" type="submit">Add Staff</button>
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
