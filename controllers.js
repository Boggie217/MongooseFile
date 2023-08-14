const Book = require("./model")

//CREATE 
const addBook = async (req, res) => {
    try {
        // const newBook = await Book.create({
        //     title: req.body.title,
        //     author: req.body.author,
        //     genre: req.body.genre
        // }) 
        console.log(req.body)
        const newBook = await Book.create(req.body)
        const successResponse = {
            message: "Success",
            newBook: newBook
        }
        res.status(201).json(successResponse)
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({})

        const successResponse = {
            message: "success",
            books: allBooks
        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}


const updateBookAuthor = async (req, res) => {
    try {
      const bookId = req.params.id;
      const updatedAuthor = req.body.author;
      
      const updateResponse = await Book.findByIdAndUpdate(
        bookId, 
        { author: updatedAuthor },
        { new: true }
      );
      
      const successResponse = {
        message: 'Author updated successfully',
        book: updateResponse
      };
      
      res.status(200).json(successResponse);
      
    } catch (error) {
      const errorResponse = {
        message: 'Error updating author',
        error: error
      };
      
      res.status(500).json(errorResponse);
    }
  };





  const deleteBook = async (req, res) => {

    try {
      const bookId = req.params.id;
      
      const deletedBook = await Book.findByIdAndDelete(bookId);
  
      const successResponse = {
        message: 'Book deleted successfully', 
        book: deletedBook
      };
      
      res.status(200).json(successResponse);
  
    } catch (error) {
     
      const errorResponse = {
       message: 'Error deleting book',
       error: error
     };
     
     res.status(500).json(errorResponse);
    }
  
  };



  const searchBook = async (req, res) => {
    try {
        const allBooks = await Book.find({})

        const successResponse = {
            message: "success",
            books: allBooks
        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}







module.exports = {
    addBook,
    getAllBooks,
    updateBookAuthor,
    deleteBook,
    searchBook
}
