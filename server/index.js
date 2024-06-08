import express from "express"; 
import mongoose from "mongoose"; 

// init
const app = express(); 

// db connection
const dburi = 'mongodb+srv://uruta:walterrific@cluster0.nyg0auu.mongodb.net/test_auth?retryWrites=true&w=majority&appName=Cluster0'; 
const port = 3000; 

mongoose.connect(dburi)
    .then(() => {
        console.log(`CONNECTED TO DATABASE`);
        app.listen(port, () => {
            console.log(`LISTENING ON PORT: ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/', (req, res) => {
    res.status(200).send("Hello Tester !"); 
})