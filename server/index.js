import express from 'express';

import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import formRoutes from './routes/forms.js'
import folderRoutes from './routes/folder.js'
import cors from 'cors'
import verifyToken from './middlewares/verifyToken.js';
import path from 'path'


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))



app.use('/api/auth', authRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/folders',folderRoutes);

app.get('/',(req,res)=>{
    res.json({
        Status: 'Sucess',
        Message:'Api working fine'
    })
})

app.use("*", (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
        status: 'Error',
    });
});


app.listen(5000, ()=>{
    mongoose.connect("mongodb+srv://sayalinikumbh:sayali2598@cluster1.06ujhga.mongodb.net/form-builder?retryWrites=true&w=majority&appName=Cluster1")
    .then(()=>{console.log('Connected to database Successfuly')})
    .then(()=> console.log(`Server is running at port 5000 `))
   
})

