const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    roll: String,
    password: String,
    contact: String
});

const Student = mongoose.model("Student", studentSchema);

// Insert
app.post('/add', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Inserted");
});

// Get
app.get('/students', async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

// Delete
app.delete('/delete/:roll', async (req, res) => {
    await Student.deleteOne({ roll: req.params.roll });
    res.send("Deleted");
});

// Update
app.put('/update/:roll', async (req, res) => {
    await Student.updateOne(
        { roll: req.params.roll },
        { $set: req.body }
    );
    res.send("Updated");
});

app.listen(5000, () => console.log("Server running on port 5000"));