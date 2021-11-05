import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import BookCards from "../layouts/BookCards";
import "bootstrap";
const MyListDisplay = (props) => {
  const myListArray = useSelector((state) => state.myList);
  const displaymyList = myListArray.map((item) => (
    <BookCards
      key={item.key}
      id={item.id}
      title={item.title}
      subtitle={item.subtitle}
      thumbnail={item.thumbnail}
      previewLink={item.previewLink}
      myList={item.myList}
    />
  ));
  return (
    <>
      {displaymyList.length === 0 ? (
        <p className="fs-1 text-center text-danger">No items in My List</p>
      ) : (
        <Row>{displaymyList}</Row>
      )}
    </>
  );
};
export default MyListDisplay;
