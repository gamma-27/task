"use client";
import { addTask } from '@/services/taskService';
import React, { useState } from 'react'
import axios  from 'axios';
import {toast } from 'react-toastify';
// export const metadata = {
//   title: "Add Task: Work Manager",
// };

const AddTask = () => {
    const [task,setTask]=useState({
        title:"",
        content:"",
        status:"none",
        userId:""
  })
  const handleAddTask= async (event)=>{
    event.preventDefault();
    try{
      const result=await axios.post('/api/tasks',task);
      console.log(result);
      toast.success("Tour task is added",{
        position:"top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    }
    catch(error){
      console.log(error,"cant fecth task details from UI");
      toast.error("Task not added",{
        position:"top-center",
      })
      
    }


  }

  return (
    <div className='grid grid-cols-12 mt-4 justify-center'>
        <div className='col-span-4 col-start-5 shadow-sm p-5'>
          <div className=' flex justify-center my-8'>
           <img src="logins.svg" alt="" 
           style={{
            width:"70%",
           }}
           />
          </div>
            <h1 className='text-xl text-center'>
                Add your task here!!
            </h1>

            <form action="#!" onSubmit={handleAddTask}>
              <div className='=mt-4'>
                <label htmlFor='task_title' className='block text-sm font-medium mb-2'>Title</label>
                <input type="text" className='w-full p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800' id="task_title"
                name="task_title"
                onChange={(event)=>{
                  setTask({
                    ...task,
                    title:event.target.value,
                  })
                }}
                value={task.title}
                />
              </div>

              <div className='=mt-4'>
                <label htmlFor='task_content' className='block text-sm font-medium mb-2'>Content</label>
                <textarea className='w-full p-3 rounded-lg bg-gray-800 focus:ring-gray-400 border border-gray-800 ' id="task_content" row={5}
                name="task_content"
                onChange={(event)=>{
                  setTask({
                    ...task,
                    content:event.target.value,
                  })
                }}
                value={task.content}
                
                />
              </div>

              <div className='mt-4'>
                <label htmlFor='task_status' className='block text-sm font-medium'>Status</label>
                <select id='task_status'className='w-full p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800' 
                name="task_status"
                onChange={(event)=>{
                  setTask({
                    ...task,
                    status:event.target.value
                  })
                }}
                value={task.status}
                 >
                  <option value="none" disabled>--Select--</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className='mt-4 flex justify-center space-x-2'>
                <button className='bg-blue-600 py-2 px-3 rounded-lg  hove:bg-blue-800'>Add Task</button>
                <button className='bg-red-600 py-2 px-3 rounded-lg  hove:bg-red-800'>Clear</button>
              </div>

                 
              
            </form>

        </div>

    </div>
  )
}

export default AddTask