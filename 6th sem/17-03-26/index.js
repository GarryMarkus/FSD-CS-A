const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/', (req, res)=>{
    const {name} = req.body;

    res.send('Welcome $(name)');
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully running and app is listening ")
    else
        console.log("error occured, server can't start", error);
})