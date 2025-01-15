import { useState, createContext } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const createBook = async (newBook) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/albums",
      {
        title: newBook,
      }
    );

    console.log("response", response.data);
    setBooks([...books, response.data]);
  };

  const fetchBooks = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    console.log("response =>", response.data);
    setBooks(response.data);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = async (editedBook) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/albums/${editedBook.id}`,
      {
        title: editedBook.title,
      }
    );
    setBooks(
      books.map((book) =>
        book.id === editedBook.id ? { ...book, ...response.data } : book
      )
    );
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, handleDelete, handleEdit, createBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
