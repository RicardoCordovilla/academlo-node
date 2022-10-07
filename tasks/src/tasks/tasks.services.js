const {getAllTasks,getTaskById, createTask} =require('./tasks.controllers')

// todos los servicios tienen req y res
const getTasks=(req,res)=>{
    const data=getAllTasks()
    res.status(200).json(data)
}

const getTask=(req,res)=>{
    const id= req.params.id
    const data =getTaskById(id)
    if(data){
        res.status(200).json(data)
    }
    else{
        res.status(404).json({id:id,message: `${id} Invalid`})
    }
}

const newTask=(req,res)=>{
    const {title}=req.body
    if(title){
        const data=createTask(title)
        res.status(201).json(data)
    }
    else{
        res.status(400).json({message:'Incomplete fields'})
    }
}

module.exports={
    getTasks,getTask,newTask
}