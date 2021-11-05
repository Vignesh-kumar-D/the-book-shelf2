import { Row } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchform from "./SearchForm";
// import dummyBooks from "../dummyData";
import BookCards from "../../layouts/BookCards";

const SearchBook = (props) => {
  const [noBooksFound, setNoBooksFound] = useState(false);
  const [items, setitems] = useState([]);

  const fillItems = (data) => {
    setitems(data.items);
    if (data.totalItems === 0) setNoBooksFound(true);
  };
  const booksSearched = items?.map((item) => {
    return (
      <BookCards
        key={item.id}
        id={item.id}
        title={item.volumeInfo.title}
        subtitle={item.volumeInfo.subtitle}
        thumbnail={item.volumeInfo.imageLinks?.thumbnail}
        previewLink={item.volumeInfo.previewLink}
      />
    );
  });
  return (
    <>
      <Searchform setData={fillItems} />
      {noBooksFound ? (
        <p className="fs-2 text-danger">No Books Found. Try again</p>
      ) : (
        ""
      )}

      <Row>{booksSearched}</Row>
    </>
  );
};

export default SearchBook;
