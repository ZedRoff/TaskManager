const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Task = require('./models/task');
const uuid = require('uuid');

dotenv.config();
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB database...');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB database:', error);
    });

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
    res.send('hi');
});

// Create a task
app.post('/api/createTask', async (req, res) => {
   
    try {
        const { title, description } = req.body;
       
        const task = new Task({ title, description, uuid: uuid.v4() });
        await task.save();
        res.status(200).send('Task created successfully');
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Error creating task');
    }
});

// Update a task by UUID
app.put('/api/updateTask/:uuid', async (req, res) => {
    try {
        const taskUuid = req.params.uuid;
        const { title, description } = req.body;
        const task = await Task.findOneAndUpdate({ uuid: taskUuid }, { title, description }, { new: true });
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.status(200).send('Task updated successfully');
        }
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send('Error updating task');
    }
});

// Delete a task
app.delete('/api/deleteTask/:uuid', async (req, res) => {
    try {
        const taskUuid = req.params.uuid;
        const task = await Task.findOneAndDelete({ uuid: taskUuid });
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.status(200).send('Task deleted successfully');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).send('Error deleting task');
    }
});

// Modify a task
app.put('/api/modifyTask/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description } = req.body;
        const task = await Task.findByIdAndUpdate(taskId, { title, description }, { new: true });
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.status(200).send('Task modified successfully');
        }
    } catch (error) {
        console.error('Error modifying task:', error);
        res.status(500).send('Error modifying task');
    }
});

// Get all tasks
app.get('/api/getAllTasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (error) {
        console.error('Error getting tasks:', error);
        res.status(500).send('Error getting tasks');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
