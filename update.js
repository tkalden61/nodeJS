const fs=require('fs');

fs.readFile("python.txt",(err,data)=>{
    console.log('file read succesfully');
    var ostring=String(data);
    ostring='this is the text that i want to write \n i am trying to write it on my own';

    fs.writeFile("convertedfile.txt",ostring,(err)=>{
         console.log('succesfully updated');
    });
});