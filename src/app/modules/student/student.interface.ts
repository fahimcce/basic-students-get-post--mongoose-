
import { Schema, model, connect } from 'mongoose';


//student name type
export type StudentName={
    firstName:string;
    middleName:string;
    lastName:string;
}

// Guardian data type
export type Guardian={
    fatherName:string;
    fatherContact:string;
    fatherProfession:string;
    motherName:string;
    motherContact:string;
    motherProfession:string;
}

export type TlocalType = {
    name:string,
    contact:string,
    profession:string,
}

// student full data 
export type Student= {
    name:StudentName;
    contactNo:string;
    email: string;
    presentAddress:string;
    permanentAddress:string;
    guadianData:Guardian;
    localQuardian:TlocalType;
    bloodGroup:"A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    isActive:"active" | "blocked";
  }


