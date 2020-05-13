const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "Sorangel",
        "website": "faztweb.com"
    };
    res.json(data);
});

module.exports = router;