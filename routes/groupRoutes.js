const express = require('express');
const {createGroup, editGroupName} = require('../../../Splitwise/backend/controllers/groupController');

const router = express.Router();

router.route('/createGroup').post(createGroup);
router.route('/patchGroup').patch(editGroupName);

module.exports = router;