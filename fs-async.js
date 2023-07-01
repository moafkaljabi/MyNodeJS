const {readFile, writeFile, read} = require("fs");

console.log("start");
readFile("./content/first-text.txt","utf8",(err,result) =>{
    if(err){
    return err;
    }
    const first = result;

    readFile("./content/second-text.txt","utf8",(err,result)=>{
        if(err){
            return err
        }
    
    const second = result;

    writeFile(
        "./content/result-async.txt",
        `Here is the first text: ${first},${second}`,
        (err,result) => {
            if(err){
                return err
            }
            console.log("done with this task");
        }
        )
    })
    })

console.log("Starting with the new task");