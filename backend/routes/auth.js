const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "mihirisagoodboy"

//ROUTE 1: Create a user using post api/auth/createuser
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must be of minimum 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  let success = false
  //If there are errors return bad requests and errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success,errors: errors.array() });
  }

  //check whether user with this email exists already

  try {

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({success, error: "sorry a user with this email already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, JWT_SECRET)
    success = true;
    res.json({ success,authToken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

//ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false
  //If there are errors return bad requests and errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 


const {email,password} = req.body;
try {
  const user = await User.findOne({email});
  if (!user){
    success=false;
    return res.status(400).json({success, error: "Please try to login with correct credentials"});
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if(!passwordCompare){
    success = false;
    return res.status(400).json({success, error: "Please try to login with correct credentials"});
  }

  const data = {
    user: {
      id: user.id
    }
  }
  const authToken = jwt.sign(data, JWT_SECRET)
  success = true;
  res.json({ success, authToken })

} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}

})


//ROUTE 3: get Loggedin user details using: POST "/api/auth/getuser". login required

router.post('/getuser', fetchuser, async (req,res)=>{
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


module.exports = router