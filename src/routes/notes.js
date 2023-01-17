const express = require("express");
const router = express.Router();

router.get('/notes/list', (req, res) => {
    res.send('Note List');
});

router.get('/notes/create', (req, res) => {
    res.send('Create Note');
});

router.get('/notes/update', (req, res) => {
    res.send('Update Note');
});

module.exports = router;