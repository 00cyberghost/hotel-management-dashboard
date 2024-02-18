"use client"
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { notifyError } from '@/lib/utils'

export const useReception = () => {

    const router = useRouter()
    
    
    /********* staffs **********/

    //check room  availability
    const ReceptionCheckAvailability = (props) => {

        const { data:rooms, error, isLoading } = useSWR('/reception/check_availability', (...args) =>
        
        axios.post(...args,props).then(res => res.data))

        return {rooms,isLoading,error}

        // setErrors([])

        // axios.post('/reception/check_availability', props)
        // .then((res) => {

        //     console.log(res)
        //     router.push('/admin/staff_list')
        // })
        // .catch(error => {
        //     console.log(error)
        //     if (error.response.status !== 422) throw error

        //     setErrors(error.response.data.errors)
        // })
    }

    //add booking
    const ReceptionAddBooking = async ({ setErrors, ...props }) => {

        setErrors([])

        axios.post('/reception/add_booking', props)
        .then((res) => {
           router.push('/reception')
        })
        .catch(error => {

            if(error.response.status == 400){

                const text = 'If this is a group booking: some rooms might have being booked. Please start the booking process afresh. If this is a single booking: The booking was not successful.'

                notifyError(error.response.data.message,text,false,3000)

            }

            if (error.response.status !== 422) throw error

           setErrors(error.response.data.errors)
        })
    }
    
    //users/staff list
    const AdminStaffList =  () => {

        const { data: user, error, isLoading } = useSWR('/admin/staff_list', (...args) =>
        axios.get(...args)
        .then(res => res.data))

        return {user,isLoading,error}
        
    }

    //edit user/staff
    const AdminEditStaff =  (id) => {

        const { data: user, error, isLoading} = useSWR(`/admin/staff/edit/${id}`, (...args) =>
        axios.get(...args)
        .then(res => res.data))

        return {user,isLoading,error}
        
    }

    //delete user/staff
    const AdminDeleteStaff = async (id) => {
        
        return await axios.delete(`/admin/staff/delete/${id}`).then(res => res.data).catch(err => err)

    }

    //update user/staff
    const AdminUpdateStaff =  ({ setErrors, ...props}) => {

        setErrors([])

        axios.put(`/admin/staff/update/${props.id}`, props)
        .then((res) => {

            console.log(res)
            router.push('/admin/staff_list')
        })
        .catch(error => {
            console.log(error)
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        })
        
    }


    /******** Rooms *******/


    //add a Room
    const AdminAddRoom = async ({ setErrors, ...props }) => {

        setErrors([])

        axios.post('/admin/add_room', props)
        .then((res) => {
            router.push('/admin/room_list')
        })
        .catch(error => {
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        })
    }

    //room list
    const AdminRoomList =  () => {

        const { data:rooms, error, isLoading } = useSWR('/admin/room_list', (...args) =>
        axios.get(...args)
        .then(res => res.data))

        return {rooms,isLoading,error}
        
    }

    //edit user/staff
    const AdminEditRoom =  (id) => {

        const { data: room, error, isLoading} = useSWR(`/admin/room/edit/${id}`, (...args) =>
        axios.get(...args)
        .then(res => res.data))

        return {room,isLoading,error}
        
    }

    //edit user/staff
    const AdminViewRoom =  (id) => {

        const { data: room, error, isLoading} = useSWR(`/admin/room/view/${id}`, (...args) =>
        axios.get(...args)
        .then(res => res.data))

        return {room,isLoading,error}
        
    }


    //delete a room
    const AdminDeleteRoom = async (id) => {
        
        return await axios.delete(`/admin/room/delete/${id}`)

    }

    //delete a room image
    const AdminDeleteRoomImage = async (id) => {
        
        return await axios.delete(`/admin/image/delete/${id}`)

    }

    //add a Room
    const AdminAddRoomImage = async ({...props }) => {

       

        axios.post('/admin/image/add', props)
        .then(res => res.data)
        .catch(error => {
            if (error.response.status !== 422) throw error
            console.log(error)
        })
    }

    //update a room
    const AdminUpdateRoom =  ({ setErrors, ...props}) => {

        setErrors([])

        axios.put(`/admin/room/update/${props.id}`, props)
        .then((res) => {
            router.push('/admin/room_list')
        })
        .catch(error => {

            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        })
        
    }

    return {
        ReceptionCheckAvailability,
        ReceptionAddBooking
    }

    

    
    

   
}
