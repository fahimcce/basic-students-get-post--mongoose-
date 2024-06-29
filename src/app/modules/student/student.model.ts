import { Schema, model, connect } from 'mongoose';
import { Guardian, Student, StudentName, TlocalType } from './student.interface';

// nameShema Type 
const nameSchema = new Schema<StudentName>({
    firstName:{
     type:String,
     required:true
    },
    middleName:{
     type:String,
     required:true
    },
    lastName:{
     type:String,
     required:true
    }
 })

//  guardian Schema Type
 const guardianSchema = new Schema<Guardian>({
    fatherName:{type:String,required:true},
    fatherContact:{type:String,required:true},
    fatherProfession:{type:String,required:true},
    motherName:{type:String,required:true},
    motherContact:{type:String,required:true},
    motherProfession:{type:String,required:true},
})

// Local guadian Schema Type
const lguardianSchema = new Schema<TlocalType>({
    name:{type:String,required:true},
    contact:{type:String,required:true},
    profession:{type:String,required:true},
})


// Full student  Schema 
const studentSchema = new Schema<Student>({
    name:nameSchema,
    contactNo:{type:String,required:true},
    email:{type:String,required:true},
    presentAddress:{type:String,required:true},
    permanentAddress:{type:String,required:true},
    guadianData:guardianSchema,
    localQuardian:lguardianSchema,
    bloodGroup:["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    isActive:["active","blocked"]
})

//   Model for Student
export const studentModel = model<Student>('student',studentSchema);