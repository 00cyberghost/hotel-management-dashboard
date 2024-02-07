"use client"
import ImageUploader from "@/app/components/ImageUploader/Page"
import { useAuth } from '@/app/hooks/auth'
import { useAdmin } from "@/app/hooks/admin"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddRoom() {

    //image url
    const path = 'admin/add_room_image'

    const { AdminAddRoom } = useAdmin()

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
    const [feature,setFeature] = useState('')
    const [features,setFeatures] = useState([])

    //temporarily hold an image name
    const [imagetemp,setImageTemp] = useState([])

    //submit the form
    const submitForm = async event => {

        event.preventDefault()

        let toJson = JSON.stringify(features)

        setFeatures(toJson)

        AdminAddRoom({
            number,
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
            setErrors,
        })
    }

    
    
    
    //add a feature
    const addFeature = (event) => {

        let feature_list = document.getElementById('feature_list')
        let div = document.createElement('div')
        let icon = document.createElement('span')
        let span = document.createElement('span')
        div.setAttribute('class','col-md-3')
        span.classList.add('class','btn')
        span.classList.add('btn-primary')
        span.textContent = feature
        div.appendChild(span)
        icon.textContent = 'X'
        icon.setAttribute('class','mx-2')
        icon.classList.add('class','text-danger')
        icon.classList.add('btn')
        
        //attach an onclick event to the element
        //this event will call the removeFeature method
        icon.addEventListener('click',(event) => removeFeature(event))

        div.append(icon)
        feature_list.appendChild(div)

        //push the feature to the featureArray
        setFeatures([...features,feature])

        //reset the input and focus
        let input = event.target.parentElement.querySelector('input')

        input.value = ''
        input.focus()

    }
    
    //removes a feature
    const removeFeature = (event) => {

        let parent = event.target.parentElement
        let feature = parent.querySelector('span').textContent
        
        //filter to remove the clicked feature from the featureArray
        const newFeature = features.filter((f) => {

            if(f === feature){

                return false

            }else{

                return true
            }
        })

        setFeatures(newFeature)
        //remove the element from dom
        parent.remove()
        
    }


    //push the name of the returned image into an array
    const appendName = (name) => {

        setImageTemp(name)

        //push the name to the images
        setImages(imagetemp => [...imagetemp,name])
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
                                                    onChange={event => setNumber(event.target.value)} />
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
                                            <div className="col-md-12">
                                                <div className="row gap-1" id="feature_list">
                                                    {/* elements are dynamically created and added here */}
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-5">
                                            <label className="form-label">Add Room Facility</label>
                                            <div class="input-group mb-3">
                                                <input type="text" onChange={event => setFeature(event.target.value)} placeholder="Television" class="form-control" />
                                                <button class="btn btn-primary" onClick={addFeature} type="button">Add</button>
                                            </div>
                                            </div>
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
