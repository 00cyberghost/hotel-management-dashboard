import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.css'

//convert data from mysql json field to an array
export const arrayToString = (arr) => {

    if(arr != null && arr != undefined){

        if(Array.isArray){
            if(arr.length > 0){

                let res = JSON.parse(arr)

                return res.toString()
            }
        }else{

            let res = JSON.parse(arr)

             return res.toString()
        }
    }
}

//open the confirm modal
//initiate delete if the user clicked delete
export const openConfirmResponse = async (id,AdminDeleteRoom) => {

    //launch sweetalert
    Swal.fire(
        {
            title: 'Delete This Item',
            text: 'Once this operation is initiated you cant reverse it',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EE3232",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: true,
            closeOnCancel: true,
            
        }
    ).then(async (result) => {

        //the user clicked the confirm/delete button
        if(result.isConfirmed) {

            try {

                //hide the table row from the dom
                document.getElementById(id).parentElement.classList.add('d-none')
                //initiate delete
                await AdminDeleteRoom(id)
                
            } catch (error) {

                //the delete was not successful
    
                //restore the hidden row
                document.getElementById(id).parentElement.parentElement.parentElement.classList.remove('d-none')
    
                Swal.fire({
                    icon: "warning",
                    title: "Unable to complete operation. Reversing changes",
                    showConfirmButton: false,
                    timer: 1500
                })
                
            }
        }
        
        
    })
    
    
}

//convert timestamp to local date and human readable format
export const handleDate = async (date) =>  {

    return new Date(date).toLocaleDateString(undefined,{year: 'numeric',month: 'short',day: '2-digit'})

    

    //const a = date.toDateString()

    //let d = new Date(date)

    //return dat
}

//convert timestamp to local date and human readable format
export const handleDate2 = (date) =>  {

    return new Date(date).toLocaleDateString(undefined,{year: 'numeric',month: 'short',day: '2-digit'})

    

    //const a = date.toDateString()

    //let d = new Date(date)

    //return dat
}

//check room availability
export const validateBookingForm = async () => {

    const checkin  = document.getElementById('checkin').value

    const checkout = document.getElementById('checkout').value

    const capacity = document.getElementById('capacity').value
    
    //the user did not select a checkin date
    if(checkin.length < 3){
        
        document.getElementById('checkin_error').textContent = 'please select a date'
        
        return

    }else{

        document.getElementById('checkin_error').textContent = ''
    }
    
    //the user did not select a checkout date
    if(checkout.length < 3){
        
        document.getElementById('checkout_error').textContent = 'please select a date'
        
        return
    }else{
         
        document.getElementById('checkout_error').textContent = ''
    }

    if(capacity < 1){

        document.getElementById('capacity_error').textContent = 'please select a capacity'
        return
    }else{

        document.getElementById('capacity_error').textContent = ''
    }

    return true
    
    
}

export const notifyError = (title,text,autoclose,timeout) => {

    new Notify({
        status: 'error',
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: autoclose,
        autotimeout: timeout,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}

export const notifySuccess = (title,text,autoclose,timeout) => {

    new Notify({
        status: 'success',
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: autoclose,
        autotimeout: timeout,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}

export const notifyWarning = (title,text,autoclose,timeout) => {

    new Notify({
        status: 'warning',
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: autoclose,
        autotimeout: timeout,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}

export const notifyInfo = (title,text,autoclose,timeout) => {

    new Notify({
        status: 'info',
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: autoclose,
        autotimeout: timeout,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}

export const notifyInfo2 = (title,text,autoclose,timeout,position) => {

    new Notify({
        status: 'info',
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: autoclose,
        autotimeout: timeout,
        gap: 20,
        distance: 20,
        type: 1,
        position: position
    })
}

//get the difference between 2 dates
//this is used to calculate the duration of stay
export const durationOfStay = (checkin_date,checkout_date) => {

    const date1 = new Date(checkin_date);
    const date2 = new Date(checkout_date);
    
    //calculating the time difference
    const Difference_In_Time = date2.getTime() - date1.getTime();
    
    // Calculating the no. of days between two dates
    return Math.round(Difference_In_Time / (1000 * 3600 * 24));
    
    
}

//check if any room was selected
//open bootstrap modal
//click the checkbox
export const openBookingModal = () => {

    let checkboxes = document.getElementsByClassName('booking-checkbox')

    let checkboxesLength = checkboxes.length

    for (let i = 0; i < checkboxes.length; i++) {
        
        if(checkboxes[i].checked){

            document.getElementById('bookingModalButton').click()
            
            //click the checkbox if it is not checked
            const checkbox = document.getElementById('checkin')

            if(checkbox.checked == false) checkbox.click()

            
            //break the loop
            return
        }
        
        //this is the last element of the checkboxes array and not checkbox was checked
        if((i + 1) == checkboxesLength) {
            
            const title = 'Please Select A Room'
            const text = 'please select a room by clicking on the checkboxes left to the room images'

            //notify the user to select a room by checking a box
            notifyInfo(title,text,true,12000)
        }
        
    }


}