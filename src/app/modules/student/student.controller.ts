import { Request, Response } from "express";
import { StudentServices } from "./student.services";


// create a student
const createStudent = async (req:Request,res:Response)=>{
   try{
    const {student:studentData} = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
        success:true,
        message:"student is created successfully",
        data:result,
    })
   }catch(err){
    console.log(err)
   }
}

// get all students
const getAllStudents=async(req:Request,res:Response)=>{
    try{
        const result  = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success:true,
            message:"students retrive successfully",
            data:result,
        })

    }catch(err){
        console.log(err)
    }
}

// get Single Students
const getSingleStudent = async(req:Request,res:Response)=>{
    try{
        const{_id} = req.params;
        const result = await StudentServices.getSingleStudentFromDB(_id)
        res.status(200).json({
            success:true,
            message:"One student retrive successfully",
            data:result,
        })
    }catch(err){
        console.log(err)
    }
}

export const StudentControllers ={
    createStudent,
    getAllStudents,
    getSingleStudent,

}