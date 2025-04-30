const express = require('express');
const router = express.Router();

const {
    getTasks, 
    createTask, 
    updateTask,
    deleteTask
} = require('../controllers/taskController');

router.get('/get', getTasks);
router.post('/create', createTask);
router.put('/create/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
