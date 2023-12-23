const fs = require('fs')
const contentToWrite = ' Something is added in this file'
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err) throw err
    else{
        let exhisting = data
        let currentData = exhisting+contentToWrite
        fs.writeFile('a.txt', currentData, 'utf-8', (err)=>{
            if(err) 
                console.log('Error while writing the file!')
            else 
                console.log('Data written successfully!')
        })
        
    }
})


fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err) throw err
    else {
        console.log(data)
    }
})