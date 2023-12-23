let count =1
function counter(){
    setTimeout(function(){
        console.log(count)
        count++
        counter()
    }, 1000)
}

counter()