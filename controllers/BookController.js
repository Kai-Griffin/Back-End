import * as BookModel  from '../models/BookModels.js';

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, message: books});

    } catch (e) {
        console.log(e);
        res.status(500).json({ 
            success: false,
            message: 'Internal server Error'
         } );
    }
};






// POSTMAN TESTING

// new http req 

//npm install mysql2 dotenv , sa terminal
//  sa terminal para mag,  run npm run dev

// 127.00.11.5000/books/all   enter this sa search sa postman to see the result