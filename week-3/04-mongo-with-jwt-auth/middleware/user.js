function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {User} = require('../db')
    const secret = require('../index')
    const jwt = require('jsonwebtoken')
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    // beared token => ["beareer", "token"]
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken, secret)
    //
    if(decodedValue.username){
        next()
    }else{
        res.status(403).json({
            msg: "You are not authenticated!"
        })
    }
}

module.exports = userMiddleware;