"use client"
import { useAuth } from "@/app/hooks/auth"

export default function Header() {

    const { user,logout } = useAuth({ middleware: 'auth' })

    
  return (
    
    <>


        {/* Nav header start */}

        <div className="nav-header">
            <a href="index-2.html" className="brand-logo">
                <svg className="logo-abbr" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <rect className="rect-primary-rect" width="80" height="80" rx="16" fill="#1362FC"/>
                    <circle cx="42" cy="19" r="10" fill="white"/>
                    <circle cx="75.5" cy="76.5" r="16.5" fill="#12A7FB"/>
                    <circle cx="5.5" cy="1.5" r="17.5" fill="#1362FC"/>
                    <circle className="rect-primary-rect-1" cx="5.5" cy="1.5" r="16.5" stroke="white" strokeOpacity="0.66" strokeWidth="2"/>
                    <path d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818" stroke="white" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect className="rect-primary-rect" width="80" height="80" rx="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg className="brand-title" width="123" height="68" viewBox="0 0 123 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.376 11.22C9.996 11.22 8.092 12.92 7.616 15.3C7.14 17.544 8.568 19.38 10.948 19.38C13.192 19.38 15.3 17.544 15.776 15.3C16.252 12.92 14.62 11.22 12.376 11.22ZM3.672 36.312L2.652 42.092C1.768 46.988 5.372 51 10.2 51C11.22 51 11.9 50.864 12.104 49.844C12.308 48.416 10.404 46.92 11.152 42.976L14.416 24.072C14.892 21.284 13.464 21.216 10.676 21.216C8.296 21.216 6.256 21.692 5.78 24.072L3.672 36.312ZM30.8651 21.216C29.1651 21.216 27.6011 21.488 26.1731 22.1C25.6291 21.352 24.3371 21.216 22.5011 21.216C20.2571 21.216 18.0811 21.624 17.6051 24.072L13.4571 48.144C13.0491 50.388 14.8851 51 17.1291 51C20.1211 51 21.6851 50.864 22.1611 48.144L25.4931 28.696C26.1051 26.044 28.6211 24.208 30.5251 24.208C32.3611 24.208 33.2451 25.636 32.6331 29.24L30.3891 42.092C29.5051 46.92 32.9051 51 37.9371 51C38.9571 51 39.5691 50.796 39.7731 49.912C39.9771 49.164 39.7731 49.028 39.5691 48.552C38.8211 47.124 38.3451 45.968 38.8891 42.976L41.1331 30.124C41.8811 25.228 38.7531 21.216 33.7891 21.216H30.8651ZM58.6229 21.216C56.9229 21.216 55.3589 21.488 53.9309 22.1C53.3869 21.352 52.0949 21.216 50.2589 21.216C48.0149 21.216 45.8389 21.624 45.3629 24.072L41.2149 48.144C40.8069 50.388 42.6429 51 44.8869 51C47.8789 51 49.4429 50.864 49.9189 48.144L53.2509 28.696C53.8629 26.044 56.3789 24.208 58.2829 24.208C60.1189 24.208 61.0029 25.636 60.3909 29.24L58.1469 42.092C57.2629 46.92 60.6629 51 65.6949 51C66.7149 51 67.3269 50.796 67.5309 49.912C67.7349 49.164 67.5309 49.028 67.3269 48.552C66.5789 47.124 66.1029 45.968 66.6469 42.976L68.8909 30.124C69.6389 25.228 66.5109 21.216 61.5469 21.216H58.6229ZM77.7702 46.24C76.6822 44.948 76.6822 43.316 76.9542 41.616C77.4302 39.916 77.9742 38.556 80.4222 37.536C81.9862 36.788 83.8902 36.72 85.5902 35.428L85.5222 35.972L84.6382 41.072C84.1622 43.588 83.6182 45.22 82.5982 46.24C81.3062 47.532 79.0622 47.804 77.7702 46.24ZM82.6662 51C88.7862 51 92.5262 46.172 93.4102 40.596L94.2262 35.972L95.2462 29.988C96.1302 25.092 92.7982 21.012 87.8342 21.012H82.3942C79.0622 21.012 75.7302 22.848 73.7582 25.568C72.7382 26.928 71.1742 29.58 72.6022 30.804C73.7582 31.824 76.3422 31.688 77.9062 31.484C79.4702 31.28 80.4222 30.94 80.6942 29.104C81.4422 24.548 86.9502 22.236 86.9502 26.928C86.9502 27.472 86.8822 28.084 86.7462 28.832C85.9982 33.048 79.8782 32.64 76.2062 33.932C72.1942 35.224 69.3382 38.556 68.5902 42.364C68.3862 43.384 68.3862 43.86 68.4542 44.88C69.0662 48.416 71.9902 51 76.0022 51H79.3342H82.6662ZM108.845 21.216C103.949 21.216 99.1206 25.228 98.3726 30.124L94.1566 54.332C93.2726 59.772 91.1646 59.84 90.9606 61.064C90.7566 62.084 91.3006 62.356 92.3206 62.356C97.2846 62.356 102.045 58.616 102.929 53.448L103.473 50.252C104.697 50.728 106.057 51 107.485 51H110.341C115.305 51 119.861 46.988 120.745 42.092L122.853 30.124C123.601 25.228 120.473 21.216 115.509 21.216H112.177H108.845ZM106.193 34.612L107.145 29.24C107.689 26.044 108.437 24.412 110.885 24.412C113.129 24.412 114.897 26.18 114.353 29.24L111.973 42.976C111.361 46.512 110.001 48.008 108.097 48.008C106.261 48.008 104.561 46.376 104.629 43.928L106.193 34.612Z" fill="#383838"/>
                </svg>
            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>

        {/* Nav header end */}


        {/* Chat box start */}

        <div className="chatbox">
            <div className="chatbox-close"></div>
            <div className="custom-tab-1">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="chat">
                        <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                            <div className="card-header chat-list-header text-center">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/></g></svg>
                                </a>
                                <div>
                                    <h6 className="mb-1">Chat List</h6>
                                    <p className="mb-0">Show All</p>
                                </div>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
                                </a>
                            </div>
                            <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
                                <ul className="contacts">
                                    <li className="name-first-letter">A</li>
                                    <li className="active dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Archie Parker</span>
                                                <p>Kalid is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Alfie Mason</span>
                                                <p>Taherah left 7 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/3.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>AharlieKane</span>
                                                <p>Sami is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/4.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Athan Jacoby</span>
                                                <p>Nargis left 30 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="name-first-letter">B</li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/5.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Bashid Samim</span>
                                                <p>Rashid left 50 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Breddie Ronan</span>
                                                <p>Kalid is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Ceorge Carson</span>
                                                <p>Taherah left 7 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="name-first-letter">D</li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/3.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Darry Parker</span>
                                                <p>Sami is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/4.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Denry Hunter</span>
                                                <p>Nargis left 30 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="name-first-letter">J</li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/5.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Jack Ronan</span>
                                                <p>Rashid left 50 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Jacob Tucker</span>
                                                <p>Kalid is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>James Logan</span>
                                                <p>Taherah left 7 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/3.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Joshua Weston</span>
                                                <p>Sami is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="name-first-letter">O</li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/4.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Oliver Acker</span>
                                                <p>Nargis left 30 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dz-chat-user">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont">
                                                <img src="/assets/images/avatar/5.jpg" className="rounded-circle user_img" alt="" />
                                                <span className="online_icon offline"></span>
                                            </div>
                                            <div className="user_info">
                                                <span>Oscar Weston</span>
                                                <p>Rashid left 50 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card chat dz-chat-history-box d-none">
                            <div className="card-header chat-list-header text-center">
                                <a href="#" className="dz-chat-history-back">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24"/><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x="14" y="7" width="2" height="10" rx="1"/><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "/></g></svg>
                                </a>
                                <div>
                                    <h6 className="mb-1">Chat with Khelesh</h6>
                                    <p className="mb-0 text-success">Online</p>
                                </div>							
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2"></i> View profile</li>
                                        <li className="dropdown-item"><i className="fa fa-users text-primary me-2"></i> Add to btn-close friends</li>
                                        <li className="dropdown-item"><i className="fa fa-plus text-primary me-2"></i> Add to group</li>
                                        <li className="dropdown-item"><i className="fa fa-ban text-primary me-2"></i> Block</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Hi, how are you samim?
                                        <span className="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Hi Khalid i am good tnx how about you?
                                        <span className="msg_time_send">8:55 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        I am good too, thank you for your chat template
                                        <span className="msg_time">9:00 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        You are welcome
                                        <span className="msg_time_send">9:05 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        I am looking for your next templates
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Ok, thank you have a good day
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Bye, see you
                                        <span className="msg_time">9:12 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Hi, how are you samim?
                                        <span className="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Hi Khalid i am good tnx how about you?
                                        <span className="msg_time_send">8:55 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        I am good too, thank you for your chat template
                                        <span className="msg_time">9:00 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        You are welcome
                                        <span className="msg_time_send">9:05 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        I am looking for your next templates
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Ok, thank you have a good day
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="/assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt="" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Bye, see you
                                        <span className="msg_time">9:12 AM, Today</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer type_msg">
                                <div className="input-group">
                                    <textarea className="form-control" placeholder="Type your message..."></textarea>
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="alerts" role="tabpanel">
                        <div className="card mb-sm-3 mb-md-0 contacts_card">
                            <div className="card-header chat-list-header text-center">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
                                </a>
                                <div>
                                    <h6 className="mb-1">Notications</h6>
                                    <p className="mb-0">Show All</p>
                                </div>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"/></g></svg>
                                </a>
                            </div>
                            <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
                                <ul className="contacts">
                                    <li className="name-first-letter">SEVER STATUS</li>
                                    <li className="active">
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont primary">KK</div>
                                            <div className="user_info">
                                                <span>David Nester Birthday</span>
                                                <p className="text-primary">Today</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="name-first-letter">SOCIAL</li>
                                    <li>
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont success">RU</div>
                                            <div className="user_info">
                                                <span>Perfection Simplified</span>
                                                <p>Jame Smith commented on your status</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="name-first-letter">SEVER STATUS</li>
                                    <li>
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont primary">AU</div>
                                            <div className="user_info">
                                                <span>AharlieKane</span>
                                                <p>Sami is online</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex bd-highlight">
                                            <div className="img_cont info">MO</div>
                                            <div className="user_info">
                                                <span>Athan Jacoby</span>
                                                <p>Nargis left 30 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="notes">
                        <div className="card mb-sm-3 mb-md-0 note_card">
                            <div className="card-header chat-list-header text-center">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/></g></svg>
                                </a>
                                <div>
                                    <h6 className="mb-1">Notes</h6>
                                    <p className="mb-0">Add New Nots</p>
                                </div>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"/></g></svg>
                                </a>
                            </div>
                            <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
                                <ul className="contacts">
                                    <li className="active">
                                        <div className="d-flex bd-highlight">
                                            <div className="user_info">
                                                <span>New order placed..</span>
                                                <p>10 Aug 2020</p>
                                            </div>
                                            <div className="ms-auto">
                                                <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil-alt"></i></a>
                                                <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex bd-highlight">
                                            <div className="user_info">
                                                <span>Youtube, a video-sharing website..</span>
                                                <p>10 Aug 2020</p>
                                            </div>
                                            <div className="ms-auto">
                                                <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil-alt"></i></a>
                                                <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex bd-highlight">
                                            <div className="user_info">
                                                <span>john just buy your product..</span>
                                                <p>10 Aug 2020</p>
                                            </div>
                                            <div className="ms-auto">
                                                <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil-alt"></i></a>
                                                <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex bd-highlight">
                                            <div className="user_info">
                                                <span>Athan Jacoby</span>
                                                <p>10 Aug 2020</p>
                                            </div>
                                            <div className="ms-auto">
                                                <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil-alt"></i></a>
                                                <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

	    {/* Chat box End */}

        {/* Header start */}

        <div className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="dashboard_bar">
                            Dashboard					</div>
                        </div>
                        <ul className="navbar-nav header-right">
                            <li className="nav-item">
                                <div className="input-group search-area">
                                    <input type="text" className="form-control" placeholder="Search here" />
                                    <span className="input-group-text"><a href="#"><i className="flaticon-381-search-2"></i></a></span>
                                </div>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link bell dz-theme-mode" href="#">
                                    <i id="icon-light" className="fas fa-sun"></i>
                                    <i id="icon-dark" className="fas fa-moon"></i>
                                    
                                </a>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link bell-link ai-icon" href="#">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23.6667 5.16666C23.6667 2.5895 21.5772 0.5 19 0.5C15.1162 0.5 8.88387 0.5 5.00004 0.5C2.42287 0.5 0.333374 2.5895 0.333374 5.16666V20.3333C0.333374 20.8058 0.618046 21.2305 1.05321 21.4113C1.48955 21.5922 1.99121 21.4918 2.32487 21.1582C2.32487 21.1582 4.59287 18.8902 5.9672 17.517C6.4047 17.0795 6.99739 16.8333 7.61689 16.8333H19C21.5772 16.8333 23.6667 14.7438 23.6667 12.1667V5.16666ZM21.3334 5.16666C21.3334 3.87866 20.2892 2.83333 19 2.83333C15.1162 2.83333 8.88387 2.83333 5.00004 2.83333C3.71204 2.83333 2.66671 3.87866 2.66671 5.16666V17.517L4.31638 15.8673C5.19138 14.9923 6.37905 14.5 7.61689 14.5H19C20.2892 14.5 21.3334 13.4558 21.3334 12.1667V5.16666ZM6.16671 12.1667H15.5C16.144 12.1667 16.6667 11.644 16.6667 11C16.6667 10.356 16.144 9.83333 15.5 9.83333H6.16671C5.52271 9.83333 5.00004 10.356 5.00004 11C5.00004 11.644 5.52271 12.1667 6.16671 12.1667ZM6.16671 7.5H17.8334C18.4774 7.5 19 6.97733 19 6.33333C19 5.68933 18.4774 5.16666 17.8334 5.16666H6.16671C5.52271 5.16666 5.00004 5.68933 5.00004 6.33333C5.00004 6.97733 5.52271 7.5 6.16671 7.5Z" fill="#1362FC"/>
                                    </svg>
                                    <div className="pulse-css"></div>
                                </a>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link  ai-icon" href="#" role="button" data-bs-toggle="dropdown">
                                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.83333 3.91738V1.50004C8.83333 0.856041 9.356 0.333374 10 0.333374C10.6428 0.333374 11.1667 0.856041 11.1667 1.50004V3.91738C12.9003 4.16704 14.5208 4.97204 15.7738 6.22504C17.3057 7.75687 18.1667 9.8347 18.1667 12V16.3914L19.1105 18.279C19.562 19.1832 19.5142 20.2565 18.9822 21.1164C18.4513 21.9762 17.5122 22.5 16.5018 22.5H11.1667C11.1667 23.144 10.6428 23.6667 10 23.6667C9.356 23.6667 8.83333 23.144 8.83333 22.5H3.49817C2.48667 22.5 1.54752 21.9762 1.01669 21.1164C0.484686 20.2565 0.436843 19.1832 0.889509 18.279L1.83333 16.3914V12C1.83333 9.8347 2.69319 7.75687 4.22502 6.22504C5.47919 4.97204 7.0985 4.16704 8.83333 3.91738ZM10 6.1667C8.45183 6.1667 6.96902 6.78154 5.87469 7.87587C4.78035 8.96904 4.16666 10.453 4.16666 12V16.6667C4.16666 16.8475 4.12351 17.026 4.04301 17.1882C4.04301 17.1882 3.52384 18.2265 2.9755 19.322C2.88567 19.5029 2.89501 19.7187 3.00117 19.8902C3.10734 20.0617 3.29517 20.1667 3.49817 20.1667H16.5018C16.7037 20.1667 16.8915 20.0617 16.9977 19.8902C17.1038 19.7187 17.1132 19.5029 17.0234 19.322C16.475 18.2265 15.9558 17.1882 15.9558 17.1882C15.8753 17.026 15.8333 16.8475 15.8333 16.6667V12C15.8333 10.453 15.2185 8.96904 14.1242 7.87587C13.0298 6.78154 11.547 6.1667 10 6.1667Z" fill="#1362FC"/>
                                    </svg>
                                    <div className="pulse-css"></div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{height:'380px'}}>
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media me-2">
                                                        <img alt="image" width="50" src="/assets/images/avatar/1.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media me-2 media-info">
                                                        KG
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Resport created successfully</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media me-2 media-success">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                                <li>
                                                <div className="timeline-panel">
                                                    <div className="media me-2">
                                                        <img alt="image" width="50" src="/assets/images/avatar/1.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media me-2 media-danger">
                                                        KG
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Resport created successfully</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-panel">
                                                    <div className="media me-2 media-primary">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="all-notification" href="#">See all notifications <i className="ti-arrow-end"></i></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link ai-icon" href="#" data-bs-toggle="dropdown">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.15608 11.6592C0.937571 10.4299 0.253296 8.76839 0.253296 7.03607C0.253296 5.29415 0.944772 3.62306 2.17648 2.39134C3.4082 1.15963 5.0793 0.46814 6.82122 0.46814C8.56315 0.46814 10.2342 1.15963 11.466 2.39134L11.9149 2.84033L12.3639 2.39134C13.5956 1.15963 15.2655 0.46814 17.0075 0.46814C18.7506 0.46814 20.4205 1.15963 21.6522 2.39134C22.8839 3.62306 23.5766 5.29415 23.5766 7.03607C23.5766 8.76839 22.8923 10.4299 21.6726 11.6592L12.7625 21.0939C12.5428 21.3268 12.2355 21.4589 11.9149 21.4589C11.5944 21.4589 11.2871 21.3268 11.0674 21.0939L2.15608 11.6592ZM11.9149 18.5945L19.9799 10.0553L20.0039 10.0313C20.7974 9.23659 21.244 8.15974 21.244 7.03607C21.244 5.9124 20.7974 4.83556 20.0039 4.04083C19.2092 3.2461 18.1311 2.79951 17.0075 2.79951C15.885 2.79951 14.807 3.2461 14.0122 4.04083L12.7397 5.31456C12.2835 5.76955 11.5452 5.76955 11.0902 5.31456L9.81646 4.04083C9.02293 3.2461 7.94489 2.79951 6.82122 2.79951C5.69756 2.79951 4.62071 3.2461 3.82598 4.04083C3.03125 4.83556 2.58586 5.9124 2.58586 7.03607C2.58586 8.15974 3.03125 9.23659 3.82598 10.0313C3.83438 10.0397 3.84158 10.0469 3.84879 10.0553L11.9149 18.5945Z" fill="#1362FC"/>
                                    </svg>
                                    <div className="pulse-css"></div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 p-3 height370">
                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-badge primary"></div>
                                            <a className="timeline-panel text-muted" href="#">
                                                <span>10 minutes ago</span>
                                                <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge info">
                                            </div>
                                            <a className="timeline-panel text-muted" href="#">
                                                <span>20 minutes ago</span>
                                                <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge danger">
                                            </div>
                                            <a className="timeline-panel text-muted" href="#">
                                                <span>30 minutes ago</span>
                                                <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge success">
                                            </div>
                                            <a className="timeline-panel text-muted" href="#">
                                                <span>15 minutes ago</span>
                                                <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge warning">
                                            </div>
                                            <a className="timeline-panel text-muted" href="#">
                                                <span>20 minutes ago</span>
                                                <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge dark">
                                            </div>
                                            <a className="timeline-panel text-muted" href="#">
                                                <span>20 minutes ago</span>
                                                <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                                    <img src="/assets/images/profile/pic1.jpg" alt="" />
                                    <div className="header-info ms-3">
                                        <span>{ user?.name.slice(0,10) }</span>
                                        <small>{ user?.role}</small>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="app_profile.html" className="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span className="ms-2">Profile </span>
                                    </a>
                                    <a href="email_inbox.html" className="dropdown-item ai-icon">
                                        <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <span className="ms-2">Inbox </span>
                                    </a>
                                    <a href="#" onClick={logout} className="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span className="ms-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

	   {/* Header end */}




 


    </>

  )
}
