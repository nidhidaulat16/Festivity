const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Wishlist = require('../models/Wishlist');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get All the wishlist using: GET "/api/wishlist/fetchallwishlist". login required
router.get('/fetchallwishlist', fetchuser, async (req, res) => {
    try {
        const notes = await Wishlist.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//ROUTE 2: Add a new Wishlist using: POST "/api/wishlist/addwishlist". login required
router.post('/addwishlist', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be of minimum 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag, uid, image } = req.body;
        //If there are errors return bad requests and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Wishlist({
            title, description, tag, uid,image, user: req.user.id
        })
        const savedNote = await note.save()

        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//ROUTE 3: Delete an existing Note using: DELETE "/api/wishlist/deletenote". login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //Find the note to be updated and update it
        let note = await Wishlist.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        //Allow deletion only if user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Wishlist.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router