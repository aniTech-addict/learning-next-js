
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
    const task = await req.json();
    tasks.push(task);
    return Response.json(task);
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