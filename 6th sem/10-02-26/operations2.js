const fs = require("fs");

/* 1️⃣ CREATE & WRITE FILE */
fs.writeFile("demo.txt", "Hello, this file is created using fs module.\n", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }
    console.log("File created and written successfully");

    
    fs.appendFile("demo.txt", "This line is appended later.\n", (err) => {
        if (err) {
            console.log("Error appending file");
            return;
        }
        console.log("Data appended successfully");

        
        fs.readFile("demo.txt", "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file");
                return;
            }
            console.log("\nFile content:\n", data);

            console.log("\nFile will be deleted after 5 seconds... ⏳");

         
            setTimeout(() => {
                fs.unlink("demo.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }
                    console.log("File deleted successfully ❌");
                });
            }, 5000); 
        });
    });
});
