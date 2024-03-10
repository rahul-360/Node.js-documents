const fs = require("fs");

// sync
// fs.writeFileSync("./text.txt", "Hey Node.js 1.0");


Async
fs.writeFile("./text.txt", "Hey Node.js 2.0", (err) => { });


// read from contacts.txt 

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);


fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Result", result);
    }
})

// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./text.txt", `${Date.now()} Hey Node.js\n`);
