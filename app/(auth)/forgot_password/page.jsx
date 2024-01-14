import Link from "next/link"

export default function ForgotPassword() {
  return (
    
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
                                            <img  className="light-login" src="public/assets/images/logo-white.png" alt="" />

                                        </Link>
										<Link href="/">
                                            <img  className="dark-login" src="public/assets/images/logo-dark.png" alt="" />

                                        </Link>
									</div>
                                    <h4 className="text-center mb-4">Sign in your account</h4>
                                    <form action="https://innap.dexignzone.com/codeigniter/demo/index">
                                    <div className="mb-3 position-relative">
                                            <label className="mb-1"><strong>Your email</strong></label>
											<input type="email" id="email" className="form-control" placeholder="ozorclinton@mail.com" />
											
                                        </div>
                                        
                                        <div className="row d-flex justify-content-between mt-4 mb-2">
                                            <div className="mb-3">
                                                <Link href="/">Back To Login</Link>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block">Email Me A Reset Link</button>
                                        </div>
                                    </form>
                                    
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
