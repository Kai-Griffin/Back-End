import express from 'express';

// create express app
const app = express();


// middleware to parse JSON requests
app.use(express.json());

const port = 3000;

try {
    app.listen(port,() => {
        console.log('Listening port 3000...');
    });   
} catch (e) {
    console.log(e);
}

app.get('/Agquiz',async (request,response) => {
    response.status(200).json({message: 'Hello Im Agquiz!!'});
});

// ipconfig, example 192.168.194.88:3000 to access your workmate through IP address