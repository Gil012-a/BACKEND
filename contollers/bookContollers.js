import * as bookService from '../services/bookService.js';


export const fetchAllBooks = async (req, res) => {

    const books = await bookService.fetchAllBooks();
    respose.status(200).jason(books)

}
