function userMiddleware(req, res, next) {
    const {User} = require("../db")
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    User.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            console.log('middleware passed!')
            next()
        }else{
            res.status(403).json({
                msg: "user doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;