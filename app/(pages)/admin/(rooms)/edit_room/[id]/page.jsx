"use client"
import ImageUploader from "@/app/components/ImageUploader/Page"
import { useAuth } from '@/app/hooks/auth'
import { useAdmin } from "@/app/hooks/admin"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AddFeature from "@/app/components/AddFeature/Page"

export default function EditRoom(props) {

    //image url
    const path = 'admin/add_room_image'

    const { AdminUpdateRoom,AdminEditRoom } = useAdmin()

    const {room, isLoading, error} = AdminEditRoom(props.params.id);


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

    //temporarily hold an image name
    const [imagetemp,setImageTemp] = useState([])

    //submit the form
    const submitForm = async event => {

        event.preventDefault()
        
        //convert to json
        const toJson = JSON.stringify(features)      
        
        //set the feature array to a json
        setFeatures(toJson)

        AdminUpdateRoom({
            type,
            capacity,
            bed,
            bathroom,
            kitchen,
            description,
            price,
            tax,
            features,
            images,
            id,
            setErrors,
        })
    }

    
    
    
    


    //push the name of the returned image into an array
    const appendName = (name) => {

        setImageTemp(name)

        //push the name to the images
        setImages(imagetemp => [...imagetemp,name])
    }

   

   
    
    //use effect hook
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

                                           <div className="row">
                                                
                                                <AddFeature features={copyFeature} toggleFeatures={(f) => setFeatures(f)} />
                                                    
                                                
                                           </div>

                                           <div className="row">
                                            <div className="col-md-12">
                                                <ImageUploader path={path} appendName={appendName} />
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
