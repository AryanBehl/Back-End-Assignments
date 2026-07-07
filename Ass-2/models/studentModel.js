let students = [
    {
        id: 1,
        name: "Aryan",
        age: 19,
        gender: "Male"
    },
    {
        id: 2,
        name: "Priya",
        age: 20,
        gender: "Female"
    },
    {
        id: 3,
        name: "Rahul",
        age: 18,
        gender: "Male"
    }
];

let nextId = 4;


const getAllStudents = () => {
    return students;
};


const getStudentById = (id) => {
    return students.find(student => student.id === id);
};


const createStudent = (name, age, gender) => {
    const newStudent = {
        id: nextId++,
        name: name,
        age: age,
        gender: gender
    };
    students.push(newStudent);
    return newStudent;
};


const updateStudent = (id, name, age, gender) => {
    const index = students.findIndex(student => student.id === id);
    if (index === -1) return null;

    students[index] = {
        id: id,
        name: name || students[index].name,
        age: age || students[index].age,
        gender: gender || students[index].gender
    };
    return students[index];
};


const deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === id);
    if (index === -1) return null;

    const deletedStudent = students[index];
    students.splice(index, 1);
    return deletedStudent;
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};