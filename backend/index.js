import express from 'express';
import user from './user.js'; 
import cors from '.cors';
const app = express();

app.use(cors());
app.get("/",(req,res)=>{
    res.send("server is ready")
})

app.get("/api/users", (req,res) =>{
    res.send(user)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`)
});