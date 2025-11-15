// Step 1 Add new code

// import express from 'express';

// // create express app
// const app = express();


// // middleware to parse JSON requests
// app.use(express.json());

// const port = 3000;

// try {
//     app.listen(port,() => {
//         console.log('Listening port 3000...');
//     });   
// } catch (e) {
//     console.log(e);
// }

// app.get('/Iladio',async (request,response) => {
//     response.status(200).json({message: 'Hello Im  Stunna !!'});
// });

// // ipconfig, example 192.168.194.88:3000 to access your workmate through IP address





// Step 2 Add new code









import express from "express";
import 'dotenv/config.js';
// import studentRoutes from "./routers/StudentRoutes.js"
import bookRoutes from "./routers/BookRoutes.js"
import cors from "cors";

//init app
const app = express();


// enable cors to frontend
let corsOptions = {
    origin: process.env.ORIGIN
}


//middleware
app.use(express.json());
app.use(cors(corsOptions));


// this used to log thr request on the console
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/student',studentRoutes);
app.use('/book', bookRoutes);





