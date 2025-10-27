
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
        setTasks([...tasks, response.data])
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
        Tasks Page
    </>
        )
}
export default Page
