import * as StudentkModel  from '../models/StudentkModels.js';

export const fetchStudent = async (req, res) => {
    try {
        const students = await BookModel.getstudents();
        res.status(200).json({success: true, message: students});

    } catch (e) {
        console.log(e);
        res.status(500).json({ 
            success: false,
            message: 'Internal server Error'
         } );
    }
};