const express = require('express');

const app = express();   
const PORT = 3000;

app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World from Express Server!');
});

app.get('/user/:name', (req, res) => {
    const username = req.params.name;
    res.send(`Welcome ${username}`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`You searched for: ${keyword}`);
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully!',
        receivedData: data
    });
});


app.put('/update', (req, res) => {
    res.send('Data updated successfully!');
});

app.delete('/delete', (req, res) => {
    res.send('Data deleted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});