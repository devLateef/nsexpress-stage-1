const express = require('express');
const router = express.Router();
const { addUser, 
    updateUser, 
    findAllUsers, 
    deleteUser, 
    findOneUser
} = require('../controllers/userControllers');
const validate = require('../middlewares/validate');

router.route('/store').post(validate, addUser);
router.route('/update/:id').put(updateUser);
router.route('/all').get(findAllUsers);
router.route('/one/:id').get(findOneUser);
router.route('/delete/:id').delete(deleteUser)


module.exports = router