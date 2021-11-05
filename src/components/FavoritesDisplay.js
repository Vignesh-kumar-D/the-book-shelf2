import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import BookCards from "../layouts/BookCards";
import "bootstrap";
const FavoritesDisplay = (props) => {
  const favoritesArray = useSelector((state) => state.favorites);
  const displayFavorites = favoritesArray.map((item) => (
    <BookCards
      key={item.key}
      id={item.id}
      title={item.title}
      subtitle={item.subtitle}
      thumbnail={item.thumbnail}
      previewLink={item.previewLink}
      checked={true}
    />
  ));
  return (
    <>
      {displayFavorites.length === 0 ? (
        <p className="fs-1 text-danger text-center">No items in Favorite</p>
      ) : (
        <Row>{displayFavorites}</Row>
      )}
    </>
  );
};

export default FavoritesDisplay;
