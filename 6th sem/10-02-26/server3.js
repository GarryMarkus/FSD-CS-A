const { read } = require("fs");
const { promisify } = require("util");

const fs= require("fs").promises;

async function readFileExample() {
    try{
        const data = await fs.readFile("myfile.txt", "utf8");
        console.log("File content:", data);
    }
    catch(err){
        console.error("Error reading file:", err);
    }
}

readFileExample();

// const {promisify} = require("util");
const readFileAsync= promisify(require("fs").readFile);

async function readwithPrmoisify() {
    try{
        const data = await readFileAsync("myfile.txt", "utf8");
        console.log(data);
    }

    catch (err){
        console.error(err);
    }
}

readwithPrmoisify();