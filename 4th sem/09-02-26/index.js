import http from "http"
import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const server = http.createServer((req, res) => {
    const filePath = path.join(_dirname, "message.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain"});
            res.end("Error reading file");
        }
        else{
            res.writeHead(2000, {"Content-Type": "text/plain"});
            res.end(data);
        }
    });
});

server.listen((5000), () => {
    console.log("Server is running");
});