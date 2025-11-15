// import * as StudentkModel  from '../models/StudentkModels.js';

// export const fetchStudent = async (req, res) => {
//     try {
//         const students = await BookModel.getstudents();
//         res.status(200).json({success: true, message: students});

//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ 
//             success: false,
//             message: 'Internal server Error'
//          } );
//     }
// };

import * as StudentModels from "../models/StudentModels.js"


export const fetchStudents = async (req, res) =>{
    try{
        const student = await StudentModels.getStudents();
        res.status(200).json({success: true, messsage: student});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            messsage: "Internal Server Error"
        })
    }
}

export const createStudent = async (req, res) => {
    const { Name, Srcode, Course } = req.body;

    try {
        const studentId = await StudentModels.insertStudent(Name, Srcode, status);
        res.status(200).json({ success: true, message: bookId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export const editBook = async (req, res) => {
    const { title, genre, status } = req.body;
    const { bookId } = req.params;

    try {
        const updatedId = await BookModels.updateBook(title, genre, status, bookId);
        res.status(200).json({ success: true, message: updatedId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const deleteBooks = async (req, res) => {
    const {bookId} = req. params

     try {
        const deleteId = await BookModels.deleteBook( bookId);
        res.status(200).json({ success: true, message: deleteId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};




