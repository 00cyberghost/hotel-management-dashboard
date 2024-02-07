"use client"
import Dropzone from '@/public/assets/vendor/dropzone/dist/dropzone'
import { useEffect } from 'react'

export default function ImageUploader(props) {

  const getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }
  

  useEffect(() => {

    //instantiate dropzone and bind it to the dropzone form
    const dropzone = new Dropzone("#dropzone",
    {
        resizeHeight: 800,
        resizeQuality: 0.7,
        resizeMethod: 'contain',
        //headers: {'Authorization' : `Bearer ${getCookie('XSRF-TOKEN')}`},
        headers: {'XSRF-TOKEN' : getCookie('XSRF-TOKEN')},
    });

    //on successful upload of file
    dropzone.on("success", function(file) {
        //a new name of the uploaded image is returned
        //pass the new image name to the parent
        props.appendName(file.xhr.response)
    });
    dropzone.on('error', function(err){
      console.log(err)
    })

    //return dropzone.destroy()
    
    return () => {
      dropzone.destroy()
    }


  
  },[])
  return (
    
    
      <div className='compose-content'>
        <form action={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.path}`} method='post' class="dropzone" id='dropzone'>
          <div class="fallback">
              <input name="file" type="file" multiple />
          </div>
      </form>
      </div>
    
  )
}
