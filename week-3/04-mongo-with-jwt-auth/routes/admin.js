const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require('jsonwebtoken')
const { Admin, Course} = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Impleme nt admin signup logic
    const username = req.body.username
    const password = req.body.password


    const user = await Admin.find({
        username: username,
        password: password
    })
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token : token
        })
    }else{
        res.status(411).json({
            msg: "incorrect email and pwd!"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    //zod for validation
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse._id)
    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id 
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })
});
 
module.exports = router;