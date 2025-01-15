import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDelete } = useContext(BooksContext);

  const deleteBook = () => {
    handleDelete(book.id);
  };

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const closeEditBox = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? <BookEdit book={book} closeEditBox={closeEditBox} /> : book.title}
      <div className="actions">
        <button className="delete" onClick={deleteBook}>
          Delete
        </button>
        <button className="edit" onClick={toggleShowEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}
