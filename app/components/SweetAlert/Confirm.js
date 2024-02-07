import { useEffect } from "react"

export default function Confirm(props) {

      

    useEffect(() => {
        
        //launch the modal
        const launchModal = () => {
            
            //launch sweetalert
            Swal.fire(
                {
                    title: props.title,
                    text: props.text,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#EE3232",
                    confirmButtonText: "Delete",
                    cancelButtonText: "Cancel",
                    closeOnConfirm: true,
                    closeOnCancel: true,
                    
                }
            ).then((result) => {

                //the user clicked the confirm/delete button
                if(result.isConfirmed) {

                    //do something
                    console.log(props.openConfirmId)

                    props.openConfirmResponse(props.openConfirmId)
                }
                
                //set the openconfirmState to false
                props.resetOpenconfirmState(false)
            })
    
            
        }
        
        //launch the modal whenever there is a state change
        props.openConfirmState == false ? launchModal() : launchModal()


    },[props.openConfirmState,props.resetOpenconfirmState,props.openConfirmId,props.text,props.title,props])

  
}
