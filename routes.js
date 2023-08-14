const { Router } = require("express")
const bookRouter = Router()

const { addBook, getAllBooks,updateBookAuthor,deleteBook, searchBook, } = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getBooks", getAllBooks)
bookRouter.put("/books/updateBookAuthor", updateBookAuthor)
bookRouter.delete("/books/deleteBooks", deleteBook)

bookRouter.get('/books/search', searchBook);

module.exports = bookRouter