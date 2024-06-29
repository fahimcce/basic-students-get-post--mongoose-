import { Student } from './student.interface';
import { studentModel } from './student.model';

// post a data to DB
const createStudentIntoDB = async(student:Student)=>{
    const result = await studentModel.create(student);
    return result;
}

// get all data from DB
const getAllStudentsFromDB = async()=>{
    const result = await studentModel.find();
    return result;
}

// get single student 
const getSingleStudentFromDB = async (_id: string) => {
    const result = await studentModel.findOne({ _id });
    return result;
};


export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
}