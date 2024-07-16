const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    // Process the contact form submission (e.g., send an email, save to database)
    res.status(200).send('Message received');
});

module.exports = router;
