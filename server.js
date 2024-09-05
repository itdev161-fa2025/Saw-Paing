import express from 'express';
import connectDatabase from './Config/db'; 
const app = express();


connectDatabase();


app.get('/', (req, res) => 
    res.send('HTTP GET request sent to root API endpoint')
);


app.listen(3000, () => {
    console.log('Express server running on port 3000');
});