const fs = require('fs')

// asynchronus task 
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

// synchronus task 
let a=0
for(let i =0; i<10000000000; i++){
    a=a+1
}

//^ asynchronus task wait for the completion of the synchronus task after its complition its time will come 
