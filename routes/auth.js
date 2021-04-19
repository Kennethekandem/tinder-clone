const router = require('express').Router();
const schema = require('../schemas/auth.schema');
const user = require('../controllers/user.controller');
const validator = require('../middlewares/validator');

router.post('/register', validator(schema.register), user.register)

module.exports = router;
