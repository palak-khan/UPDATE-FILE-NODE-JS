// UPDATE FILE
//1. writeFile = change the data
//2. appendFile add the data
const fs = require("fs");
fs.writeFile("hello.txt", "WELCOME WORLD!", (err) => {
  if (err) {
    console.log(err);
  }
  else{
    console.log("Done")
  }
});



fs.appendFile("hello.txt", "HELLO WORLD!", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Done")
    }
});
