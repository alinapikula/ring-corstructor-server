const router = require('express').Router();
const rowListController = require('../controllers/rowListData.js')


router.route('/row-list')
  .get(rowListController.rowList)

router.route('/pos1/:id')
  .get(rowListController.rowSelected1)

router.route('/pos2/:id')
  .get(rowListController.rowSelected2)

router.route('/pos3/:id')
  .get(rowListController.rowSelected3)

router.route('/pos1-2/:id1')
  .get(rowListController.rowSelected12)



module.exports = router;