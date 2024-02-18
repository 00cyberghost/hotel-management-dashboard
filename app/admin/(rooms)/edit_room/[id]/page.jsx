"use client"
import ImageUploader from "@/components/ImageUploader/Page"
import { useAuth } from '@/hooks/auth'
import { useAdmin } from "@/hooks/admin"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import EditRoomFeatures from "@/components/RoomFeatures/EditRoomFeatures"
import { openConfirmResponse } from "@/lib/utils"

export default function EditRoom(props) {

    //image url
    const path = 'admin/add_room_image'

    const { AdminUpdateRoom,AdminEditRoom,AdminDeleteRoomImage,AdminAddRoomImage } = useAdmin()

    const {room, isLoading, error} = AdminEditRoom(props.params.id);


    const [number, setNumber] = useState('')
    const [type, setType] = useState('')
    const [capacity, setCapacity] = useState('')
    const [bed, setBed] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [kitchen, setKitchen] = useState('')
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [tax, setTax] = useState('')
    const [errors, setErrors] = useState([])
    const [images,setImages] = useState([])
    const [features,setFeatures] = useState([])
    const [id, setId] = useState('')
    const [copyFeature, setCopyFeature] = useState([])
    

    //submit the form
    const submitForm = async event => {

        event.preventDefault()
        
        //convert to json
        const toJson = JSON.stringify(features)      
        
        //set the feature array to a json
        setFeatures(toJson)

        AdminUpdateRoom({
            number,
            type,
            capacity,
            bed,
            bathroom,
            kitchen,
            size,
            description,
            price,
            tax,
            features,
            id,
            setErrors,
        })
    }


    //add an image to the room
    //the image name is passed from the imageuploader component
    const addRoomImage = (name,id) => {

        const ob = {
            room_id : id,
            image_name: name,
            path: 'sample'
        }

        AdminAddRoomImage(ob)
    }

    
    
   

   
    
    //use effect hook
    useEffect(() => {
        
        setNumber(room?.number)
        setType(room?.type)
        setCapacity(room?.capacity)
        setBed(room?.bed)
        setBathroom(room?.bathroom)
        setKitchen(room?.kitchen)
        setSize(room?.size)
        setDescription(room?.description)
        setPrice(room?.price)
        setTax(room?.tax)
        setFeatures(room?.features)
        setCopyFeature(room?.features)
        setImages(room?.image)
        setId(room?.id)
            
    },[room])

   

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
                                        <h4 className="text-primary">Add a room</h4>
                                        <form onSubmit={submitForm}>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Number</label>
                                                    <input type="number" placeholder="1" 
                                                    id="number" 
                                                    className="form-control"
                                                    required
                                                    minLength={1}
                                                    maxLength={40}
                                                    value={number} 
                                                    disabled />
                                                    <span className='text-danger'>{errors.number}</span>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Type</label>
                                                    <input type="text" placeholder="Queen A-2345"
                                                     id="type" className="form-control"
                                                     required
                                                     minLength={1}
                                                     maxLength={40}
                                                     value={type} 
                                                     onChange={event => setType(event.target.value)} />
                                                     <span className='text-danger'>{errors.type}</span>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Capacity</label>
                                                    <input type="number" placeholder="2" id="capacity" className="form-control"
                                                    required
                                                    min={1}
                                                    max={1000000}
                                                     value={capacity} 
                                                     onChange={event => setCapacity(event.target.value)} />
                                                    <span className='text-danger'>{errors.capacity}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Bed Type</label>
                                                    <select className="form-control default-select wide"
                                                    required
                                                     value={bed} 
                                                     onChange={event => setBed(event.target.value)}
                                                     id="bed">
                                                        <option defaultValue={''}>Choose...</option>
                                                        <option>Single</option>
                                                        <option>Double</option>
                                                        <option>King</option>
                                                        <option>Queen</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>

                                                    
                                                    </select>
                                                    <span className='text-danger'>{errors.bed}</span>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">bathroom</label>
                                                    <select className="form-control default-select wide"
                                                     required
                                                     value={bathroom} 
                                                     onChange={event => setBathroom(event.target.value)}
                                                     id="bathroom">
                                                        <option defaultValue={''}>Choose...</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    
                                                    </select>
                                                    <span className='text-danger'>{errors.bathroom}</span>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Kitchen</label>
                                                    <select className="form-control default-select wide"
                                                     required
                                                     value={kitchen} 
                                                     onChange={event => setKitchen(event.target.value)}
                                                     id="kitchen">
                                                        <option defaultValue={''}>Choose...</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span className='text-danger'>{errors.kitchen}</span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label className="form-label">Room Size(sqm)</label>
                                                    <input type="number" placeholder="100" id="size" className="form-control"
                                                    required
                                                    min={1}
                                                    max={1000000}
                                                     value={size} 
                                                     onChange={event => setSize(event.target.value)} />
                                                    <span className='text-danger'>{errors.size}</span>
                                                </div>
                                                <div className="mb-3 col-md-6">
                                                    <label className="form-label">Price</label>
                                                    <input type="number" placeholder="3000" id="price"
                                                    required
                                                    min={1}
                                                    max={100000000}
                                                     value={price} 
                                                     onChange={event => setPrice(event.target.value)}
                                                      className="form-control" />
                                                    <span className='text-danger'>{errors.price}</span>
                                                </div>

                                                <div className="mb-3 col-md-6">
                                                    <label className="form-label">Tax</label>
                                                    <input type="number" placeholder="100" id="tax"
                                                    required
                                                    min={1}
                                                    max={100000000}
                                                     value={tax} 
                                                     onChange={event => setTax(event.target.value)}
                                                      className="form-control" />
                                                    <span className='text-danger'>{errors.tax}</span>
                                                </div>
                                            </div>


                                            <div className="mb-3">
                                                <label className="form-label">Description</label>
                                                <textarea type="text" placeholder="Describe the room"
                                                  required
                                                  minLength={1}
                                                  maxLength={5000}
                                                 value={description} 
                                                 onChange={event => setDescription(event.target.value)}
                                                 id="description" rows="8" className="form-control">

                                                </textarea>
                                                 <span className='text-danger'>{errors.description}</span>
                                            </div>
                                            

                                           <div className="row">
                                                <EditRoomFeatures features={copyFeature} toggleFeatures={(f) => setFeatures(f)} />
                                           </div>

                                           <div className="row mt-5">
                                            {images ? images.map((image,index) => {
                                                return (
                                                    <div className="col-md-3" key={index}>
                                                        <img className="img-thumbnail w-80" src={`${process.env.NEXT_PUBLIC_BACKEND_URL2}images/${image.image_name}`} alt={image.image_name} />
                                                        <span className="btn" id={image.id} onClick={() => openConfirmResponse(image.id,AdminDeleteRoomImage)}>Delete</span>
                                                    </div>
                                                )
                                            }) : ''}
                                           
                                           </div>

                                           <div className="row">
                                            <div className="col-md-12">
                                                {id ? <ImageUploader path={path} appendName={(name) => addRoomImage(name,id)} /> : ''}
                                            </div>
                                           </div>
                                            
                                            
                                            <button className="btn btn-primary mt-5" type="submit">Add Room</button>
                                           
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
