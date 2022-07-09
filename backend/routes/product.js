const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');


//ROUTE 1: Get All the products using: GET "/api/note/fetchallproducts". login required
router.get('/fetchallproducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// //ROUTE 2: Add a new Product using: POST "/api/note/addproduct". login required
// router.post('/addproduct', fetchuser, [
//     body('title', 'Enter a valid title').isLength({ min: 3 }),
//     body('description', 'description must be of minimum 5 characters').isLength({ min: 5 }),
// ], async (req, res) => {
//     try {
//         const { title, description, tag, uid, image } = req.body;
//         //If there are errors return bad requests and errors
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const product = new Product({
//             title, description, tag, uid,image, user: req.user.id
//         })
//         const savedProduct = await product.save()

//         res.json(savedProduct)

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })

module.exports = router