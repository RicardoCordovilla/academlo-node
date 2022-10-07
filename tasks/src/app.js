const express = require("express")

const app = express()
const taskRouter=require('./tasks/tasks.router')


//? rutas -> paths y verbos http
//? controladores -> logica y acciones referentes a la DB
//? servicios -> todo lo relacionado al req y res


//! Habilita el recibir datos en formato JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "Server OK!" });
})

app.use('/', taskRouter)

app.listen(8100, () => {
  console.log("Server started at port 8100");
})
