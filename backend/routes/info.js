const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Info = require('../models/Info');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Add user info using : POST "/api/info/addtoinfo". login required
router.post('/addtoinfo', fetchuser, [
    body('name', 'Enter a valid name'),
    body('address', 'address must be of minimum 5 characters'),
    body('phoneno', 'Enter a valid phoneno')
], async (req, res) => {
    try {
        const { name, address, phoneno } = req.body;
        //If there are errors return bad requests and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const info = new Info({
            name, address, phoneno, user: req.user.id
        })
        const savedInfo = await info.save()

        res.json(savedInfo)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



//ROUTE 2: Get All the infos using: GET "/api/info/fetchallinfos". login required
router.get('/fetchallinfos', fetchuser, async (req, res) => {
    try {
        const infos = await Info.find({ user: req.user.id });
        res.json(infos)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//ROUTE 4: Delete an existing Note using: DELETE "/api/info/deleteinfo". login required
router.delete('/deleteinfo/:id', fetchuser, async (req, res) => {
    try {
        //Find the note to be updated and update it
        let info = await Info.findById(req.params.id);
        if (!info) { return res.status(404).send("Not found") }

        //Allow deletion only if user owns the note
        if (info.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        info = await Info.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", info: info });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router