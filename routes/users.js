const router = require("express").Router();
const usersController = require ("../controllers/usersData")

router.route('/users')
.get(usersController.users)

router.route('/login')
.post(usersController.login)

module.exports = router;