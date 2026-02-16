// 1. Import the Express module
const express = require('express');

// 2. Initialize the Express application
const app = express();

// 3. Define a port number
const PORT = 3000;

// 4. Create a "Route" (The receptionist's instructions)
// When someone visits the root URL '/', run this function
app.get('/', (req, res) => {
    res.send('<h1>Hello! Welcome to my first server.</h1>');
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});