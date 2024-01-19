const { JWT_SECRET } = require('../config')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    
    const jwt = require('jsonwebtoken')
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    // beared token => ["beareer", "token"]
    const words = token.split(" ")
    const jwtToken = words[1]
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
        if(decodedValue.username){
            next()
        }else{
            res.status(403).json({
                msg: "You are not authenticated!"
            })
        }
    }catch(e){
        res.json({
            msg: "invalid input!"
        })
    }

}

module.exports = adminMiddleware;