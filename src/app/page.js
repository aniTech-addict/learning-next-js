"use client"
import {useState} from 'react';

const Page = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    function handleClick(){
        const newTask = { id: Date.now(), text: input };
        setTasks([...tasks, newTask]);
        setInput("");
    }

    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    function clearAll(){
        setTasks([]);
    }
    return (
        <>
            <div>

                <p className="text-6xl">Tasks</p>

                <ul >
                    {tasks.map((task)=>(
                        <>
                        <li key={task.id} className="flex gap-2">
                            <p>{task.text}</p>
                            <button className="hover:scale-105" onClick={()=>deleteTask(task.id)}>Delete</button>
                        </li>
                        </>
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

                    <button onClick={handleClick} >Add + </button>
                </div>
            </div>
            <hr />
        <div className='text-3xl'>
            <p>Caution !</p>
        </div>
            <button className='hover:scale-105 hover:text-red-500' onClick={ ()=>clearAll()}>Clear All</button>
        </>
    )
}
export default Page
