//importing the http module
const http = require("http")

//creating server
const server = http.createServer((req, res) =>{
    //sending the response
    res.write("This is the response from the server")
    res.end();
})

//server listening to port 3000
server.listen((3000), () => {
    console.log("Server is running");
})