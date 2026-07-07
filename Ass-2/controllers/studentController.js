const studentModel = require('../models/studentModel');

const getAllStudents = (req, res) => {
    const students = studentModel.getAllStudents();
    res.json({
        success: true,
        message: "All students fetched successfully",
        data: students,
        total: students.length
    });
};


const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const student = studentModel.getStudentById(id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        message: "Student found successfully",
        data: student
    });
};


const createStudent = (req, res) => {
    const { name, age, gender } = req.body;


    if (!name || !age || !gender) {
        return res.status(400).json({
            success: false,
            message: "Name, age and gender are required"
        });
    }

    const newStudent = studentModel.createStudent(name, age, gender);
    res.json({
        success: true,
        message: "Student added successfully",
        data: newStudent
    });
};


const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, gender } = req.body;

    const updatedStudent = studentModel.updateStudent(id, name, age, gender);

    if (!updatedStudent) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        message: "Student updated successfully",
        data: updatedStudent
    });
};


const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedStudent = studentModel.deleteStudent(id);

    if (!deletedStudent) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.json({
        success: true,
        message: "Student deleted successfully",
        data: deletedStudent
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};