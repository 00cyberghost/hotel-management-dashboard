"use client"

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'


export default function Register() {

    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            phone,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }


    return (
      
    
  
  <div className="authincation h-100">
          <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                  <div className="col-md-6">
                      <div className="authincation-content">
                          <div className="row no-gutters">
                              <div className="col-xl-12">
                                  <div className="auth-form">
                                     
                                      <h4 className="text-center mb-4">Sign up your account</h4>
                                      <form onSubmit={submitForm}>
                                          <div className="mb-3">
                                              <label className="mb-1"><strong>Name</strong></label>
                                              <input type="text" 
                                                className="form-control" 
                                                placeholder="ozor clinton"
                                                value={name}
                                                onChange={event => setName(event.target.value)}
                                                required />
                                                <span className='text-danger'>{errors.name}</span>
                                          </div>
                                          <div className="mb-3">
                                              <label className="mb-1"><strong>Phone</strong></label>
                                              <input type="tel" 
                                                className="form-control" 
                                                placeholder="+123 456 7898"
                                                value={phone}
                                                onChange={event => setPhone(event.target.value)}
                                                required />
                                              <span className='text-danger'>{errors.phone}</span>
                                          </div>

                                          <div className="mb-3">
                                              <label className="mb-1"><strong>Email</strong></label>
                                              <input type="email" 
                                                className="form-control" 
                                                placeholder="ozorclinton@gmail.com"
                                                value={email}
                                                onChange={event => setEmail(event.target.value)} />
                                                <span className='text-danger'>{errors.email}</span>
                                          </div>
                                         <div className="mb-3 position-relative">
                                              <label className="mb-1"><strong>Password</strong></label>
                                              <input type="password" 
                                                id="password" 
                                                className="form-control"
                                                value={password}
                                                onChange={event => setPassword(event.target.value)} />
                                              <span className="show-pass eye">
                                              
                                                  <i className="fa fa-eye-slash"></i>
                                                  <i className="fa fa-eye"></i>
                                              
                                              </span>
                                          </div>
                                          <div className="mb-3 position-relative">
                                              <label className="mb-1"><strong>Confirm Password</strong></label>
                                              <input type="password" 
                                                id="password" 
                                                className="form-control"
                                                value={passwordConfirmation}
                                                onChange={event => setPasswordConfirmation(event.target.value)} />
                                              <span className="show-pass eye">
                                              
                                                  <i className="fa fa-eye-slash"></i>
                                                  <i className="fa fa-eye"></i>
                                              
                                              </span>
                                              <span className='text-danger'>{errors.password_confirmation}</span>
                                          </div>
                                          <div className="text-center mt-4">
                                              <button type="submit" className="btn btn-primary btn-block">Sign me up</button>
                                          </div>
                                      </form>
                                      <div className="new-account mt-3">
                                          <p>Already have an account? <Link className="text-primary" href="/login">Log in</Link></p>
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
  