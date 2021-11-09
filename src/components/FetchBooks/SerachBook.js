import { Row, Container } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchform from "./SearchForm";
// import dummyBooks from "../dummyData";
import BookCards from "../../layouts/BookCards";
import { useSelector } from "react-redux";
const SearchBook = (props) => {
  const myList = useSelector((state) => state.myList);
  const [noBooksFound, setNoBooksFound] = useState(false);
  const [items, setitems] = useState([]);

  const fillItems = (data) => {
    data.totalItems === 0 ? setNoBooksFound(true) : setitems(data.items);
  };
  const cleanItem = items.map((item) => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      previewLink: item.volumeInfo.previewLink,
    };
  });
  const newSearchedItems = cleanItem.map((dataItem) => {
    const newItem = myList.filter((listItem) => dataItem.id === listItem.id);
    if (newItem.length !== 0) {
      return newItem[0];
    }
    return dataItem;
  });

  const booksSearched = newSearchedItems.map((item) => {
    return (
      <BookCards
        key={item.id}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        thumbnail={item.thumbnail}
        previewLink={item.previewLink}
        myList={item.myList ? item.myList : undefined}
        checked={item.checked ? item.checked : false}
      />
    );
  });
  return (
    <>
      <Searchform setData={fillItems} />
      {noBooksFound ? (
        <p className="fs-2 text-danger text-center">
          No Books Found. Try again
        </p>
      ) : (
        <Container>
          <Row>{booksSearched}</Row>
        </Container>
      )}
    </>
  );
};

export default SearchBook;
