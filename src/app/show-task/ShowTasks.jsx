"use client"
import UserContext from '@/context/userContext';
import Tasks from './Tasks'
import {toast} from "react-toastify"
import deleteTask from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
const ShowTasks = () => {

    const context=useContext(UserContext);
    const [tasks,setTasks]=useState([])
    async function loadTasks(userId){

        try{
            const response = await axios.get(`/api/users/${userId}/tasks`);
            setTasks([...response.data].reverse());
            console.log(response.data, "tasks are here");

        }catch(error){
        console.log(error)
    }
    }
    useEffect(()=>{
        if(context.user){
            loadTasks(context.user._id);
        }
        
    },[context.user])
    //console.log(tasks+"here is the task");


//delete task pareent
async function deleteTaskParent(taskId) {
    try {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      console.log(response.data); // Log the response data
      const newTasks=tasks.filter(item=> item._id!=taskId);
      setTasks(newTasks);
      toast.success('Successfully deleted');
    } catch (error) {
      console.error(error);
      toast.error('Error in deleting');
    }
  }


  return (
    <div className='container grid grid-cols-12 mt-3'>
        <div className='col-span-6 col-start-4'>
            
             <h1 className='text-3xl mb-3 text-center '>Your tasks ( {tasks.length} )</h1>
             
             {tasks.map((task) => (
    <Tasks key={task._id} task={task} deleteTaskParent={deleteTaskParent} />
))}
             
        </div>
    </div>
  )
}

export default ShowTasks
