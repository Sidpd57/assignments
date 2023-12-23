const fs = require('fs')

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err) throw err
    else {
        const updatedText = data.replace(/\s+/g, ' ')
        fs.writeFile('file.txt',updatedText, 'utf-8', (err)=>{
            if(err) {
                console.log('Error while writing')
            }
            else {
                console.log('File written successfully!')
            }
        })
    }
})

