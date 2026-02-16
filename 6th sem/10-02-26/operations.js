const fs = require("fs");

/* 1️⃣ CREATE & WRITE FILE */
fs.writeFile("demo.txt", "Hello, this file is created using fs module.\n", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }
    console.log("File created and written successfully");

    /* 2️⃣ APPEND TO FILE */
    fs.appendFile("demo.txt", "This line is appended later.\n", (err) => {
        if (err) {
            console.log("Error appending file");
            return;
        }
        console.log("Data appended successfully");

        /* 3️⃣ READ FILE */
        fs.readFile("demo.txt", "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file");
                return;
            }
            console.log("\nFile content:\n", data);

            /* 4️⃣ DELETE FILE */
            fs.unlink("demo.txt", (err) => {
                if (err) {
                    console.log("Error deleting file");
                    return;
                }
                console.log("File deleted successfully");
            });
        });
    });
});
