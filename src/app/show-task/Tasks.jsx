
import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import deleteTaskParent from './ShowTasks'
import {RxCross1} from "react-icons/rx";
const Tasks = ({task,deleteTaskParent}) => {
  const {user}=useContext(UserContext);
 function deleteTask(taskId){
  deleteTaskParent(taskId);
 }
  return (
    <div className={`shadow-lg mt-2 rounded-md  + ${task.status==='completed'?"bg-green-800":"bg-gray-800"}`}>
      <div className=' p-5'>
        <div className='flex justify-between '>
        <h1 className='text-2xl font-semibold'>{task.title}</h1>
       <span onClick={()=>{
        deleteTask(task._id)
       }}
       
       className='shadpw-lg bg-gray-950 hover:bg-gray-900 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer '>
       <RxCross1 />
       </span>
        </div>
        <p className='font-normal'>{task.content}</p>
       <div className='flex justify-between mt-3 space-x-2'>
       <p className='text-left'>Status:<b>  <span className='font-bold'>{task.status}</span> </b></p>
        <p className='text-right'>Author:<b>  <span className='font-bold'>{user?.name}</span> </b></p>
       </div>
      </div>
    </div>
  )
}

export default Tasks