const express = require('express');
const router  = express.Router();

router.get('/api', (req, res, next) => {
    res.status(200).json({ message: 'Hello Student' });
});

module.exports = router;
