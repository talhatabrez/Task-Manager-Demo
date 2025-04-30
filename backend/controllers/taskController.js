const Task = require('../models/Task');
const task = require('../models/Task');

exports.getTasks = async(req, res) => {
    try{
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTask = async(req, res) => {
    const { title } = req.body;
    try {
        const newTask = new Task({ title });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateTask = async(req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try{
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, completed },
            { new: true } 
        );
        res.json(updatedTask);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteTask = async(req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task Deleted!' });
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
};