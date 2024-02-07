import { useState,useEffect } from "react"

export default function AddFeature(props) {

    const [feature,setFeature] = useState('')
    const [features,setFeatures] = useState([])

    useEffect(() => {

        let jsonData = props.features
        // Parse the JSON data if it's a string
        if (typeof jsonData === 'string') {
            try {
            jsonData = JSON.parse(jsonData);
            } catch (error) {
            console.error('Error parsing JSON data:', error);
            //return [];
            }
        }

        setFeatures(jsonData)
    },[props.features])

    //add a feature
    const addFeature = (event) => {

        let input = event.target.parentElement.querySelector('input')

        if(input.value.length > 0){

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

            setFeatures(features => [...features,feature])

            //push the feature to the featureArray in the parent component
            props.toggleFeatures([...features,feature])
            
            //reset the input and focus
            input.value = ''
            input.focus()
        }

        

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
        

        setFeatures([...newFeature])

        //push the feature to the featureArray in the parent component
        props.toggleFeatures([...newFeature])

        //remove the element from dom
        parent.remove()

        
        
    }


    let jsonData = props.features
    // Parse the JSON data if it's a string
    if (typeof jsonData === 'string') {
        try {
        jsonData = JSON.parse(jsonData);
        } catch (error) {
        console.error('Error parsing JSON data:', error);
        //return [];
        }
    }
    
    // Check if jsonData is an array
    if (!Array.isArray(jsonData)) {
        //the data is not array so return default and create elements dynamically
        return (
            <>
            <div className="col-md-12">
                <div className="row gap-1" id="feature_list">

                    {/* created elements will automatically be appended here */}

            
                </div>
            </div>
            <div className="col-md-12 mt-5">
                <label className="form-label">Add Room Facility</label>
                <div class="input-group mb-3">
                    <input type="text" onChange={event => setFeature(event.target.value)} placeholder="Television" class="form-control" />
                    <button class="btn btn-primary" onClick={addFeature} type="button">Add</button>
                </div>
            </div>
            
            </>
             
        );
        

    }else{


        // Map through the values of the array
   
        // Here you can access each item in the array
        // For example, if your items have properties like 'name', 'value', etc.
        // You can access them like item.name, item.value, etc.
        return (
            <>
            <div className="col-md-12">
                <div className="row gap-1" id="feature_list">

                    {jsonData.map((item,index) => {

                        return (
                            <div className="col-md-3" key={index}>  
                                <span className="btn btn-primary">{ item }</span>
                                <span className="mx-2 text-danger btn" onClick={removeFeature}>X</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="col-md-12 mt-5">
                <label className="form-label">Add Room Facility</label>
                <div class="input-group mb-3">
                    <input type="text" onChange={event => setFeature(event.target.value)} placeholder="Television" class="form-control" />
                    <button class="btn btn-primary" onClick={addFeature} type="button">Add</button>
                </div>
            </div>
            
            </>
             
        );
    
    }
    
    
    
      
      
  
}
