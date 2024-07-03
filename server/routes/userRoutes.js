const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .get(protect, authorize('Admin'), getUsers)
    .post(protect, authorize('Admin'), createUser);

router.route('/:id')
    .put(protect, authorize('Admin'), updateUser)
    .delete(protect, authorize('Admin'), deleteUser);

module.exports = router;
