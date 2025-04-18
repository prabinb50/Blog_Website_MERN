import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";

// configure the server
export const app = express();

// middleware for json
app.use(express.json());

// middleware for cors for all origins
app.use(cors({
    origin: '*',
}));

// connect to the database
try {
    mongoose.connect("mongodb+srv://joshiprabin17:g0HV1i3Be2XrIYD8@cluster0.kpv00gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}

// define the port
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.get("/", (req, res) => {
    res.send("server is working");
})