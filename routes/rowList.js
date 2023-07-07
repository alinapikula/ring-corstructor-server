const router = require('express').Router();
const rowListController = require('../controllers/rowListData.js')


router.route('/row-list')
  .get(rowListController.rowList)


module.exports = router;