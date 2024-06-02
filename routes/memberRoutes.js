const express = require('express');

const {getAllMembers, createMember, updateMember} = require('../../../Splitwise/backend/controllers/memberController');

const router = express.Router();

router.route('/getAllMembers/:id').get(getAllMembers);
router.route('/createMembers').post(createMember);
router.route('/updateMember').patch(updateMember);

module.exports = router;