
let tasks = [
    {
        id: 1,
        text: "Task 1"
    },
    {
        id: 2,
        text: "Task 2"
    },
    {
        id: 3,
        text: "Task 3"
    }
]

export async function GET(req){

        return Response.json(tasks);
}

export async function POST(req){
    const data = await req.json();
    console.log(data.text);
    if(data.text===""){
        return Response.json({status:204, message:"Task Not Found"} );
    }
    tasks.push(data);
    return Response.json({ message:'Task created.', task: data},{status:201});
}

export async function DELETE(req){
    const body = await req.json();
    if(body.clearAll){
        tasks=[];
        return Response.json({status:204, message:'Tasks deleted.'});
    }
    const id = body.id;
    tasks = tasks.filter(task => task.id !== Number(id));
    return Response.json({status:204, message: "Task deleted"});
}