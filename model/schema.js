import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/company");

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

export const EmployeeModel = mongoose.model("employee" , employeeSchema);