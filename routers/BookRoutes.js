import * as BookController from '../controllers/BookController.js';
import express from 'express';

const bookRouters = express.Router();

bookRouters.get('/all', BookController.fetchBooks);

export default bookRouters;