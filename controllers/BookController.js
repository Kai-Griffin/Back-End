import * as BookModels  from '../models/BookModels.js';

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModels.getBooks();
        res.status(200).json({success: true, message: books});

    } catch (e) {
        console.log(e);
        res.status(500).json({ 
            success: false,
            message: 'Internal server Error'
         } );
    }
};


export const createBook = async (req, res) => {
    const { title, genre, status } = req.body;

    try {
        const bookId = await BookModels.insertBook(title, genre, status);
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







// POSTMAN TESTING

// new http req 

//npm install mysql2 dotenv , sa terminal
//  sa terminal para mag,  run npm run dev

// 127.00.11.5000/books/all   enter this sa search sa postman to see the result