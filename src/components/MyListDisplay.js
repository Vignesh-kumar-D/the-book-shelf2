import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import BookCards from "../layouts/BookCards";
import "bootstrap";
const MyListDisplay = (props) => {
  const myListArray = useSelector((state) => state.myList);
  const displaymyList = myListArray
    .filter((item) => (item.myList ? true : false))
    .map((item) => (
      <BookCards
        key={item.id}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        thumbnail={item.thumbnail}
        previewLink={item.previewLink}
        myList={item.myList}
        checked={item.checked}
      />
    ));
  return (
    <>
      {displaymyList.length === 0 ? (
        <p className="fs-1 text-center text-danger">No items in My List</p>
      ) : (
        <Container>
          <Row>{displaymyList}</Row>
        </Container>
      )}
    </>
  );
};
export default MyListDisplay;
