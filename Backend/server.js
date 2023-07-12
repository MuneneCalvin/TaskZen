import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from "cors";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Enable CORS middleware
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,');
    next();
});

// Jwt middleware


// Routes



app.get('/', (req, res) => {
    res.send('Hello from TaskZen!!!');
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);