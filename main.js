import express from "express";
import mongoose, { Model, Schema } from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';
import { EmployeeModel } from "./model/schema.js";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const connect = await mongoose.connect("mongodb://localhost:27017/company");
const app = express();
const port = 3000;

const nameArr = ["chris", "tom", "harris", "ram", "shyam", "raghu", "jackie"]
const langArr = ["C++", "python", "java", "c#", "ruby"];
const cityArr = ["jaipur", "delhi", "gurugram", "mumbai"];

app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})
app.get('/data', async(req,res)=>{
    await EmployeeModel.deleteMany({});
    const employee = new EmployeeModel({
        name: nameArr[(Math.floor(Math.random()*(nameArr.length)))],
        salary: Math.floor(Math.random()*(25001)+25000),
        language: langArr[(Math.floor(Math.random()*(langArr.length)))],
        city: cityArr[(Math.floor(Math.random()*(cityArr.length)))],
        isManager: Math.floor(Math.random()*(2))
    });
    await employee.save();
    res.json(employee);
})

app.listen(port);