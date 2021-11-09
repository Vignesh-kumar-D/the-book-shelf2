import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import BookCards from "../layouts/BookCards";
import "bootstrap";
const FavoritesDisplay = (props) => {
  const favoritesArray = useSelector((state) => state.myList);
  const displayFavorites = favoritesArray
    .filter((item) => item.checked === true)
    .map((item) => (
      <BookCards
        key={item.id}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        thumbnail={item.thumbnail}
        previewLink={item.previewLink}
        checked={item.checked}
        myList={item.myList}
      />
    ));
  return (
    <>
      {displayFavorites.length === 0 ? (
        <p className="fs-1 text-danger text-center">No items in Favorite</p>
      ) : (
        <Container>
          <Row>{displayFavorites}</Row>
        </Container>
      )}
    </>
  );
};

export default FavoritesDisplay;
