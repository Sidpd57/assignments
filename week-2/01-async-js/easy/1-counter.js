function counter(){
    let count =1
    setInterval(function(){
       console.log(count)
       count++ 
    },1000)
}

counter()