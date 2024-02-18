"use client"
import { useEffect,useState } from "react"
import { useAdmin } from "@/hooks/admin"
import { arrayToString } from "@/lib/utils"

export default function ViewRoom(props) {

    const { AdminViewRoom } = useAdmin()

    const {room, isLoading, error} = AdminViewRoom(props.params.id)

	const [number, setNumber] = useState('')
    const [type, setType] = useState('')
    const [capacity, setCapacity] = useState('')
    const [bed, setBed] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [kitchen, setKitchen] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [tax, setTax] = useState('')
    const [errors, setErrors] = useState([])
    const [images,setImages] = useState([])
    const [features,setFeatures] = useState([])
    const [id, setId] = useState('')
    const [copyFeature, setCopyFeature] = useState([])


    useEffect(() => {

		setNumber(room?.number)
        setType(room?.type)
        setCapacity(room?.capacity)
        setBed(room?.bed)
        setBathroom(room?.bathroom)
        setKitchen(room?.kitchen)
        setDescription(room?.description)
        setPrice(room?.price)
        setTax(room?.tax)
        setFeatures(room?.features)
        setCopyFeature(room?.features)
        setImages(room?.image)
        setId(room?.id)


		//initiate the slide carousel
		carouselReview()


    },[room])


  return (
    // Content body start
    
    <div class="content-body">
	
	<div class="container-fluid">
		<div class="row">


		<div class="col-xl-9 col-xxl-8">
				<div class="card">	
					<div class="card-header border-0 pb-0">
						<h4 class="card-title">Room Details</h4>
					</div>
					<div class="card-body">
						<div class="owl-carousel gallery-carousel owl-theme pb-3">
							<div class="item">
								<img src="/assets/images/hotel/pic1.jpg" alt="" />
							</div>
							<div class="item">
								<img src="/assets/images/hotel/pic2.jpg" alt="" />
							</div>
							<div class="item">
								<img src="/assets/images/hotel/pic3.jpg" alt="" />
							</div>
							<div class="item">
								<img src="/assets/images/hotel/pic4.jpg" alt="" />
							</div>
						</div>
						<div class="d-flex mt-4 flex-wrap">
							<h4 class="card-title me-auto">Room Facilities:  </h4>
							<h5 class="card-title">{ room?.features ? arrayToString(features) : '' }</h5>
						</div>
					</div>

					<div class="card-body d-flex pt-0 align-items-center flex-wrap">
						<div class="d-flex align-items-center me-5 pe-4 mb-xxl-0 mb-2">
							<span class="key-icon me-3">
								<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.1585 6.41671C16.8932 2.80354 20.0899 0.0833735 23.9168 0.0833737C28.2868 0.0833739 31.8335 3.63004 31.8335 8.00004C31.8335 12.3685 28.2868 15.9167 23.9168 15.9167C20.0899 15.9167 16.8932 13.195 16.1585 9.58337L9.66683 9.58337L9.66683 12.75C9.66683 13.6225 8.9575 14.3334 8.0835 14.3334C7.2095 14.3334 6.50016 13.6225 6.50016 12.75L6.50016 9.58337L3.3335 9.58337L3.3335 12.75C3.3335 13.6225 2.62416 14.3334 1.75016 14.3334C0.876161 14.3334 0.166828 13.6225 0.166828 12.75L0.166828 8.00004C0.166828 7.12446 0.876162 6.41671 1.75016 6.41671L16.1585 6.41671ZM28.6668 8.00004C28.6668 10.6205 26.5388 12.75 23.9168 12.75C21.2948 12.75 19.1668 10.6205 19.1668 8.00004C19.1668 5.37804 21.2948 3.25004 23.9168 3.25004C26.5388 3.25004 28.6668 5.37804 28.6668 8.00004Z" fill="white"/>
								</svg>
							</span>
							<div>
								<h5 class="text-primary">Room No #{number}</h5>
								<h4 class="card-title mb-0">{ type }</h4>
							</div>
						</div>
						<div class="d-sm-flex d-block align-items-center">
							<div class="me-5 mb-sm-0 mb-3">
								<p class="mb-2"><i class="far fa-user scale3 me-3"></i>Room Capacity</p>
								<h4 class="mb-0 card-title">{ capacity } Person</h4>
							</div>
							<div class="me-5 mb-sm-0 mb-3">
								<p class="mb-2"><i class="fas fa-bed scale3 me-3"></i>Bed Type</p>
								<h4 class="mb-0 card-title">{ bed }</h4>
							</div>
							<div>
								<p class="mb-2"><i class="far fa-bath scale3 me-3"></i>Bathroom</p>
								<h4 class="mb-0 card-title">{ bathroom }</h4>
							</div>
							
						</div>
					</div>

					<div class="card-body d-flex pt-0 align-items-center flex-wrap">

					    <div class="d-flex align-items-center me-5 pe-4 mb-xxl-0 mb-2">
							<span class="key-icon me-3">
								<i className="fas fa-dollar text-white"></i>
							</span>
							<div>
								<h5 class="text-primary">Price</h5>
								<h4 class="card-title mb-0">{ price }</h4>
							</div>
						</div>
						
						<div class="d-sm-flex d-block align-items-center">
							<div class="me-5 mb-sm-0 mb-3">
								<p class="mb-2"><i class="far fa-user scale3 me-3"></i>Tax</p>
								<h4 class="mb-0 card-title">{ tax }</h4>
							</div>
							<div class="me-5 mb-sm-0 mb-3">
								<p class="mb-2"><i class="fas fa-archive scale3 me-3"></i>Kitchen</p>
								<h4 class="mb-0 card-title">{ kitchen }</h4>
							</div>
							
							
						</div>
						
					</div>

					



				</div>
			</div>
			<div class="col-xl-3 col-xxl-4">
				<div class="card profile-card">
					<div class="card-body">

						<h4>Description</h4>
						<p>  { description }  </p>
					
					</div>
				</div>
			</div>



		
		</div>
	</div>
</div>
   
      
  )
}
