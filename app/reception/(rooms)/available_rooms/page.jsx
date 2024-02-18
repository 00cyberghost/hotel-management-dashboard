"use client"
import { useReception } from "@/hooks/reception"
import Confirm from "@/components/SweetAlert/Confirm"
import Loading from "@/components/Loading/Page"
import { useState,useContext,useEffect } from "react"
import Link from "next/link"
import { arrayToString,notifyInfo,openConfirmResponse,durationOfStay,openBookingModal } from "@/lib/utils"
import { ReceptionContext } from "@/app/reception/layout"
import Roomtabs from "@/components/Room/RoomTabs"


export default function AvailableRooms() {



    const { ReceptionCheckAvailability,ReceptionAddBooking } = useReception();

    const { bookingData } = useContext(ReceptionContext)
    
    //the user refreshed this page directly without using the booking form
    //redirect the user back to use the form
    if(bookingData?.checkin == null || bookingData?.checkin == undefined) window.location = '/reception'

    const {rooms, isLoading, error} = ReceptionCheckAvailability(bookingData)

    //this will be used to toggle between tabs
    const [currentTab,setCurrentTab] = useState('available')

    let [room_id,setRoom_id] = useState([])

    const [checkin_date,setCheckin_date] = useState(bookingData.checkin)

    const [checkout_date,setCheckout_date] = useState(bookingData.checkout)
    
    const [name,setName] = useState('')

    const [email,setEmail] = useState('')

    const [phone,setPhone] = useState('')

    const [no_of_persons,setNo_of_persons] = useState(bookingData.capacity)

    const [capacity,setCapacity] = useState(0)

    const [price,setPrice] = useState(0)

    const [tax,setTax] = useState(0)

    const [payment,setPayment] = useState(0)

    const [errors,setErrors] = useState([])

    //when the booking form is submitted
    const submit = (event) => {

        event.preventDefault()

        setNo_of_persons(bookingData.capacity)

        ReceptionAddBooking({
            room_id,
            name,
            email,
            phone,
            checkin_date,
            checkout_date,
            no_of_persons,
            setErrors
        })
    }

    //determine if the checkbox is checked
    const isChecked = (event) => {

       const element = event.target

       if(element.checked){

        setRoom_id(room_id => [...room_id,element.value])
        
        //set room capacity by getting the required value from the checked element capacity attribute
        setCapacity(capacity + parseInt(element.getAttribute('capacity')))
        
        //set room price by getting the required value from the checked element price attribute
        setPrice(price + parseInt(element.getAttribute('price')))
        
        //set tax by getting the required value from the checked element tax attribute
        setTax(tax + parseInt(element.getAttribute('tax')))
        
        //set room(s) total payment by suming the values from the checked element price attribute and tax attribute
        setPayment(payment + (parseInt(element.getAttribute('price')) + parseInt(element.getAttribute('tax'))))

       }else{

        //filter to remove the clicked feature from the featureArray
        const newId = room_id.filter((id) => {

            if(id === element.value){

                return false

            }else{

                return true
            }
        })

        setRoom_id([...newId])

        setCapacity(capacity - parseInt(element.getAttribute('capacity')))

        setPrice(price - parseInt(element.getAttribute('price')))

        setTax(tax - parseInt(element.getAttribute('tax')))

        setPayment(payment - (parseInt(element.getAttribute('price')) + parseInt(element.getAttribute('tax'))))
        
       }
    }

    const toggleTabs = (event) => {

        const tab_name = event.target.getAttribute('data-name')

        setCurrentTab(tab_name)
    }
    
    

    

    useEffect(() => {
        document.getElementById('no_of_persons').value = bookingData.capacity
    },[bookingData])
    

    if(isLoading) return <Loading />

    


  return (

    <>
    
    <div className="content-body">
          
          <div className="container-fluid">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                          <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                              <ul className="nav nav-tabs" role="tablist">
                                  <li className="nav-item">
                                      <a className="nav-link active" onClick={toggleTabs} data-bs-toggle="tab" href="#All" role="tab" data-name="available">Available Rooms</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" onClick={toggleTabs} data-bs-toggle="tab" href="#Pending" role="tab" data-name="pending">Pending Room</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" onClick={toggleTabs} data-bs-toggle="tab" href="#Booked" role="tab" data-name="reserved">Reserved Rooms</a>
                                  </li>
                              </ul>
                          </div>
                          <div className="table-search">	
                              <div className="input-group search-area mb-xxl-0 mb-4">
                                  <input type="text" className="form-control" placeholder="Search here" />
                                  <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
                              </div>
                          </div>	
                          <a href="javascript:void(0);" className="btn btn-primary mb-xxl-0 mb-4 radius-btn" onClick={openBookingModal}><i className="far fa-file-word me-2"></i>Book Selected Room(s)</a>
                          <span href="javascript:void(0);" id="bookingModalButton" className="d-none btn btn-primary mb-xxl-0 mb-4 radius-btn" data-bs-toggle="modal" data-bs-target="#BookingModal"></span>
                      </div>
                      
                      {currentTab == 'available' ? <Roomtabs rooms={rooms} isChecked={isChecked} /> : ''}

                      {currentTab == 'pending' ? <Roomtabs rooms={rooms} isChecked={isChecked} /> : ''}

                      {currentTab == 'reserved' ? <Roomtabs rooms={rooms} isChecked={isChecked} /> : ''}
                     
                      
                      
                  </div>
              </div>
          </div>
      </div>

      {/* modal */}
    <div className="modal fade" id="BookingModal" tabindex="-1" aria-labelledby="BookingModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                <h6 className="card-title mt-2">Customer Details</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                    <div>
                        <form onSubmit={(event) => submit(event)}>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="mb-3 relative position-relative">
                                        <label for="name" className="form-label">Full Name</label>
                                        <input required onChange={(event) => setName(event.target.value)} minLength={2} maxLength={40} type="text" name="name" className="form-control" id="name" />
                                        <span id="name_error" className="text-danger">{errors.name}</span>
                                    </div>
                                </div>
                                <div className="col-md-3 relative position-relative">
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input required onChange={(event) => setEmail(event.target.value)} type="email" name="email" className="form-control" id="email" />
                                        <span id="email_error" className="text-danger">{errors.email}</span>
                                    </div>
                                        
                                </div>
                                <div className="col-md-3 relative position-relative">
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Phone No</label>
                                        <input required onChange={(event) => setPhone(event.target.value)} min={1} minLength={1} maxLength={15} type="number" name="phone" className="form-control" id="phone" />
                                        <span id="phone_error" className="text-danger">{errors.phone}</span>
                                    </div>
                                        
                                </div>
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <label for="capacity" className="form-label">No Of Persons</label>
                                        <input required type="number" min={1} className="form-control" id="no_of_persons" placeholder="1" />
                                        <span id="capacity_error" className="text-danger">{errors.no_of_persons}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary full w-100 w-full">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <h6 className="card-title mt-5 text-center">Booking Summary</h6>
                    <hr />

                    <div className="px-5 border-2 primary">
                        
                        <div className="mt-5">Total Number Of Room(s): <span className="text-right float-end">{ room_id.length }</span></div>
                        <hr />
                        <div>Duration Of Stay: <span className="text-right float-end">{ durationOfStay(checkin_date,checkout_date) } days</span></div>
                        <hr />
                        <div>Total Room Capacity: <span className="text-right float-end">{ capacity }</span></div>
                        <hr />
                        <div>Total Price: <span className="float-end">{ price }</span></div>
                        <hr />
                        <div>Total Tax: <span className="float-end">{ tax }</span></div>
                        <hr />
                        <div>Total Amount To Pay: <span className="float-end">{ payment }</span></div>
                        
                    </div>



                
                </div>
                
            </div>
        </div>
    </div>
</>
  )
}
