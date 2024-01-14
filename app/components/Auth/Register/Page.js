import Link from "next/link"
export default function Register() {
    return (
      
      <>
  
  <div className="authincation h-100">
          <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                  <div className="col-md-6">
                      <div className="authincation-content">
                          <div className="row no-gutters">
                              <div className="col-xl-12">
                                  <div className="auth-form">
                                      <div className="text-center mb-3">
                                          <Link href="/">
                                              <img className="light-login" src="public/assets/images/logo-white.png" alt="" />
                                          </Link>
                                          <Link href="/">
                                              <img className="dark-login" src="public/assets/images/logo-dark.png" alt="" />
                                          </Link>
                                      </div>
                                      <h4 className="text-center mb-4">Sign up your account</h4>
                                      <form action="https://innap.dexignzone.com/codeigniter/demo/index">
                                          <div className="mb-3">
                                              <label className="mb-1"><strong>Name</strong></label>
                                              <input type="text" className="form-control" placeholder="ozor clinton" />
                                          </div>
                                          <div className="mb-3">
                                              <label className="mb-1"><strong>Phone</strong></label>
                                              <input type="tel" className="form-control" placeholder="+123 456 7898" />
                                          </div>
                                          <div className="mb-3">
                                              <label className="mb-1"><strong>Email</strong></label>
                                              <input type="email" className="form-control" placeholder="ozorclinton@gmail.com" />
                                          </div>
                                         <div className="mb-3 position-relative">
                                              <label className="mb-1"><strong>Password</strong></label>
                                              <input type="password" id="dz-password" className="form-control" />
                                              <span className="show-pass eye">
                                              
                                                  <i className="fa fa-eye-slash"></i>
                                                  <i className="fa fa-eye"></i>
                                              
                                              </span>
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
  
  
      </>
    )
  }
  