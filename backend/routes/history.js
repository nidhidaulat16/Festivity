const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const History = require('../models/History');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Add a new item to history using: POST "/api/note/addtohistory". login required
router.post('/addtohistory', fetchuser, async (req, res) => {
    try {
        const { title, tag, image } = req.query;
        //If there are errors return bad requests and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const history = new History({
            title, tag, image, user: req.user.id
        })
        const savedHistory = await history.save()

        res.json(savedHistory)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//ROUTE 2: Delete an existing Item from history using: DELETE "/api/note/deletefromhistory". login required
router.delete('/deletefromhistory/:uid', fetchuser, async (req, res) => {
    try {
        //Find the note to be updated and update it
        let history = await History.remove({uid: req.params.uid})
        if (!history) { return res.status(404).send("Not found") }

        // //Allow deletion only if user owns the note
        // if (history.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not allowed");
        // }

        // history = await History.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", history: history });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//
router.get('/fetchallhistory', fetchuser, async (req, res) => {
    try {
        const history = await History.find({ user: req.user.id })
        res.json(history)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured")
    }

})


module.exports = router
