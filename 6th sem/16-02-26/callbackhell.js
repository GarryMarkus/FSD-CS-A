const fs = require("fs");

fs.readFile('File1.txt', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.readFile('File2.txt', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        fs.readFile('File3.txt', (err, data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        });
    });
});