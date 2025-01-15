import { useContext, useState } from "react";
import BooksContext from "../context/books";

export default function BookCreate() {
  const { createBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3> Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter the title of book"
          onChange={handleOnChange}
          value={title}
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}
