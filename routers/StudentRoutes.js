import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const studentRouters = express.Router();

studentRouters.get('/all', StudentController.fetchStudents);

export default studentRouters;