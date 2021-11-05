import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import BookCards from "../layouts/BookCards";

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
        <p>No items in Favorite</p>
      ) : (
        <Row>{displayFavorites}</Row>
      )}
    </>
  );
};

export default FavoritesDisplay;
