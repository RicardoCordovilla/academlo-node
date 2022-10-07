const uuid=require('uuid')

const TasksDB = [
    {
        id: 1,
        title: 'Tarea1',
        status: false
    },
    {
        id: 2,
        title: 'Tarea2',
        status: false
    },
]


const getAllTasks=()=>{
    return TasksDB
}

const getTaskById=(id)=>{
    const data=TasksDB.find(task=>task.id===+id)
    return data
} 

const createTask=(title)=>{
    const newTask={
        id:uuid.v4(),
        title,
        status:false
    }
    TasksDB.push(newTask)
    return newTask
}

module.exports={
    getAllTasks,getTaskById, createTask
}
