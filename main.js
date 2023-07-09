const app=require('fs');
var content = 'this is the text that i want to write\n it is a new file for CRUD operation\ni am trying to write it on my own';

app.writeFileSync('python.txt',content,(err)=>{
    if(err) throw err;
    console.log('something went wrong');
});
