const fs = require("fs");

fs.readFile("foo.text", function (err, data) {
  if (err) {
    console.error( err); 
  }

  else{
    console.log(data.toString());
  }
});

fs.readFile("mytext.txt", function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});

console.log("Program ended");