const Student = require('../models/studentModel');

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json({
            success: true,
            message: "All students fetched successfully",
            data: students,
            total: students.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createStudent = async (req, res) => {
    try {
        const { name, age, gender } = req.body;

        if (!name || !age || !gender) {
            return res.status(400).json({
                success: false,
                message: "Name, age and gender are required"
            });
        }

        const newStudent = new Student({ name, age, gender });
        await newStudent.save();

        res.json({
            success: true,
            message: "Student added successfully",
            data: newStudent
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { name, age, gender } = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { name, age, gender },
            { new: true, runValidators: true }
        );

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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};