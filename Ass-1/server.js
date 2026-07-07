const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let students = ["Aryan", "Harsh", "Yash"];


app.get("/", (req, res) => {
    res.send("Backend is Running Successfully");
});


app.get("/students", (req, res) => {
    res.json({
        success: true,
        message: "All students fetched successfully",
        data: students,
        total: students.length
    });
});

app.get("/students/:index", (req, res) => {
    const { index } = req.params;

    if (index < 0 || index >= students.length) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        message: "Student found successfully",
        data: students[index]
    });
});

app.post("/students", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    students.push(name);

    res.json({
        success: true,
        message: "Student added successfully",
        data: students
    });
});

app.put("/students/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    if (index < 0 || index >= students.length) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    const oldName = students[index];
    students[index] = name;

    res.json({
        success: true,
        message: "Student updated successfully",
        oldName: oldName,
        newName: name,
        data: students
    });
});

app.delete("/students/:index", (req, res) => {
    const { index } = req.params;

    if (index < 0 || index >= students.length) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const deletedName = students[index];
    students.splice(index, 1);

    res.json({
        success: true,
        message: "Student deleted successfully",
        deletedName: deletedName,
        data: students
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📚 Initial Students:`, students);
});