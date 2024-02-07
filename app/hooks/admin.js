"use client"
import useSWR from 'swr'
import axios from '@/app/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useAdmin = () => {

    const router = useRouter()
    
    
    /********* staffs **********/

    //add users/staff
    const AdminAddStaff = async ({ setErrors, ...props }) => {

        setErrors([])

        axios.post('/admin/add_staff', props)
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

    //delete a room
    const AdminDeleteRoom = async (id) => {
        
        return await axios.delete(`/admin/room/delete/${id}`).then(res => res.data).catch(err => err)

    }

    //update a room
    const AdminUpdateRoom =  ({ setErrors, ...props}) => {

        setErrors([])

        axios.put(`/admin/room/update/${props.id}`, props)
        .then((res) => {

            console.log(res)
            router.push('/admin/room_list')
        })
        .catch(error => {
            console.log(error)
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        })
        
    }

    return {
        AdminAddStaff,
        AdminStaffList,
        AdminEditStaff,
        AdminUpdateStaff,
        AdminDeleteStaff,
        AdminAddRoom,
        AdminRoomList,
        AdminEditRoom,
        AdminUpdateRoom,
        AdminDeleteRoom
    }

    

    
    

   
}
