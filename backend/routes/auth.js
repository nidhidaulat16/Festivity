const express = require('express');
const User = require('../models/User');
const Notes = require('../models/Note');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const Razorpay = require('razorpay');



const JWT_SECRET = "mihirisagoodboy"

const key_id = "rzp_test_aTqnRgP2lVSkAY"
const key_secret = "xSWN8lLz7vnWdJlUBJ1Pr3q3"

const instance = new Razorpay({
  key_id,
  key_secret
})

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
    return res.status(400).json({ success, errors: errors.array() });
  }

  //check whether user with this email exists already

  try {

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "sorry a user with this email already exists" })
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
    res.json({ success, authToken })

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


  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
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

router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//razorpay total
router.get('/orders/razorpay/:Total', async (req, res) => {
  const id = "1"
  const amount = req.params.Total * 100
  // const amount = "100"
  const currency = "INR"
  const receipt = "HEllo"
  const notes = "mihir"
  instance.orders.create({ amount, currency, receipt, notes }, (error, order) => {
    if (error) {
      return res.status(500).json(error)
    }
    return res.status(200).json(order)
  })
})

//delete from cart and add to history
router.post('/successbuy/:id/:title/:tag', fetchuser, async (req, res) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  User.findByIdAndUpdate(
    { _id: req.user.id },
    {
      $addToSet: {
        history: {
          id: req.params.id,
          title: req.params.title,
          // description: req.params.description,
          tag: req.params.tag,
          image: req.query.image,
          date: today.toDateString(),
        },
      },
    }, { new: true },
    (err, userInfo) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json(userInfo.history);
    })
})


module.exports = router