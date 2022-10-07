const express = require("express");

const app = express();

// rutas: paths y verbos http
// conrtoladores: lógica ya acciones referentes al db (sql)
// servicios

// habilita el recibir datos en formato json
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server ok!'
    })
})

const db = [
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

app.get('/tasks', (req, res) => {
    res.status(200).json(db)
})

app.get('/tasks/:id', (req, res) => {
    const id = req.params.id

    const data = db.filter(item => item.id === +id)
    if (data.length !== 0)
        res.status(200).json({ data: data })
    else
        res.status(200).json({ response: 'invalid ID'})


})

app.post('/tasks', (req, res) => {

    // const task=req.body
    const { id, title, status } = req.body

    // valores falsy

    if (id && title) {


        db.push({
            // id:task.id,
            // title:task.title,
            // status:task.status
            // no le mandamos el task porque el front puede mandar campos demas
            id: id,
            title: title,
            status: status
        })

        res.status(200).json({
            message: 'post en tasks',
            database: db,
            tarea: task
        })
    }
    else {
        res.status(400).json({
            message: `El dato id o title no puede ser  ${id && title}`
        })
    }


})


app.listen(8000, () => {
    console.log('Server started at port 8000')
})