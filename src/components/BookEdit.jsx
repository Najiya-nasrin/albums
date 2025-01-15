import { useContext, useState } from "react";
import BooksContext from "../context/books";

export default function BookEdit({ book , closeEditBox}) {
   const [ updatedTitle, setUpdatedTitle ] = useState(book.title);
   const { handleEdit } = useContext(BooksContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleEdit({id: book.id, title: updatedTitle});
    closeEditBox();
    setUpdatedTitle("");
  };

  const handleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  return (
    <div className="book-edit">
      <form onSubmit={handleFormSubmit}>
        <input
          className="input"
          value={updatedTitle}
          type="text"
          onChange={handleChange}
        />
        <button className="button is-primary"> Save </button>
      </form>
    </div>
  );
}
