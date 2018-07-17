const router = require("express").Router();

router.get('/', (req, res, next) => {
  console.log('1');
  res.status(200).send('Hi it is ok');
});

module.exports = router;