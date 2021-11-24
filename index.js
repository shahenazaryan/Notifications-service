import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";

const app = express()
const PORT = 3000

app.use(express.json());      
app.use(express.urlencoded({extended: true})); 
app.use('/api', router)

const start = async() =>{
  try{
    await mongoose.connect('mongodb+srv://form:admin@cluster0.h4zf7.mongodb.net/form?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  }catch(e){
    console.log(e);
  }
}
start()

// app.get('/form', async (req, res) => {
//   const options  = client.db().collection('options')
//   var form = await options.findOne({comp_id:req.query['comp_id'], instance :req.query['instance']})
  
//   if(!form)
//     form = options.insertOne({comp_id:req.query['comp_id'], instance :req.query['instance']})
  
//   res.send(form)
// })

// app.delete('/form', async (req, res) => {
//   const options  = client.db().collection('options')
//   console.group(req.query);
//   await options.insertOne({name:'registration form', desc:'registration description'})
//   res.send(req.query)
// })

// app.post('/user1', async (req, res) => {
//   const options  = client.db().collection('options')
//   await options.insertOne({name:'registration form', desc:'registration description'})
//   res.send(req.body)
// })

// app.post('/', function (req, res) {
//     res.send('Got a POST request')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })