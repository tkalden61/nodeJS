const fs=require('fs');

fs.unlink('convertedfile.txt',()=>{
    console.log('the file is deleted');
});

