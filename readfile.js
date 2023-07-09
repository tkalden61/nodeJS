const fs=require('fs');

fs.readFile('python.txt',(err,data)=>{
    if(err) throw err;
    console.log(String(data));
});

console.log('the file which we read is given below');
