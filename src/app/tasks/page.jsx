"use client"
import {useState} from 'react';
import { useEffect} from "react";
import axios from "axios";

const Page = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");


    async function createTask(){
        console.log("CREATE TASK");
        const response = await axios({
            method:"POST",
            url:"api/tasks",
            data:{
                id: Date.now(),
                text: input
            }
        })
        setInput("");
        if(response.data.status ===204){
            alert('Empty tasks cant be created.')
        }else {
            setTasks([...tasks, response.data.task])
        }
        console.log(response.status);
    }

    async function deleteTask(id){
        const response = await axios({
            method: "DELETE",
            url: `/api/tasks`,
            data:{
                id: id
            }
        })
        if(response.data.status === 204){
            setTasks(tasks.filter(task => task.id !== Number(id)))
        }
    }

    async function deleteTasks(){
        const response = await axios({
            method: "DELETE",
            url: `/api/tasks`,
            data:{
                clearAll: true
            }
        })
        if(response.data.status === 204) {
            setTasks([]);
        }else {
            alert('Error deleting tasks.')
        }
    }

    useEffect(() => {
        axios({
            method:"GET",
            url:"api/tasks"
        }).then((response)=>{
            setTasks(response.data)
        })
    },[])

    return (
        <>
            <div>

                <p className="text-6xl">Tasks</p>

                <ul >
                    {tasks.map((task)=>(

                            <li  className="flex gap-2" key={task.id}>
                                <p>{task.text}</p>
                                <button className="hover:scale-105" onClick={()=>deleteTask(task.id)}>Delete</button>
                            </li>

                    ))}
                </ul>

            </div>

            <div className="inline-flex gap-3">
                <h2>
                    Enter New Task
                </h2>
                <div>
                    <input
                        placeholder="Enter task"
                        value = {input}
                        onChange={(e) => setInput(e.target.value)
                        }
                        className='border-2 border-amber-200 p-0.5'
                    />

                    <button className='m-1 hover:scale-105' onClick={createTask} >Add + </button>
                </div>
            </div>
            <hr />
            <div className='text-3xl'>
                <p>Caution !</p>
            </div>
            <button className='hover:scale-105 hover:text-red-500' onClick={ ()=>deleteTasks()}>Clear All</button>
        </>
    )
}
export default Page
