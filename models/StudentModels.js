import pool from '../config/db.js';

export const getStudents = async () =>{
    const[rows] = await pool.query("SELECT * FROM `tblstudent`");
    return rows;
}

export const insertStudents = async (Name, Srcode, Course) => {
    const [result] = await pool.query(
        "INSERT INTO tblstudent (Name, Srcode, Course) VALUES (?, ?, ?)",
        [Name, Srcode, Course]
        )
        return result.insertId
}

export const updateStudents = async (Name, Srcode, Course, statusId) => {
    const [result] = await pool.query(
        "UPDATE tbstudent SET title = ?, genre = ?, status = ? WHERE Id = ?",
        [Name, Srcode, Course,  studentkId]
        )
        return result.affectedRows;
}

export const deleteStudents = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE Id = ?",
        [studentId]
        )
        return result.affectedRows;
}
