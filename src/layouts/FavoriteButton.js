import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import updateLists from "../APICall/updateLists";
import { stateAction } from "../store/app-state";
const FavoriteButton = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const favorite = useSelector((state) => state.favorites);
  const listChangeHandler = async (event) => {
    const body = {
      id: props.id,
      title: props.title,
      subtile: props.subtitle,
      thumbnail: props.thumbnail,
      previewLink: props.previewLink,
      myList: null,
    };
    if (event.target.checked === true) {
      const favoriteItemKey = await updateLists(
        "POST",
        userId,
        body,
        "favorites"
      );
      dispatch(
        stateAction.addFavorite({
          key: favoriteItemKey,
          id: props.id,
          title: props.title,
          subtile: props.subtitle,
          thumbnail: props.thumbnail,
          previewLink: props.previewLink,
        })
      );
    } else {
      const deleteFavorite = favorite.filter((item) => props.id === item.id);
      dispatch(stateAction.removeFavorite(deleteFavorite));

      updateLists(
        "DELETE",
        userId,
        { key: deleteFavorite[0].key },
        "favorites"
      );
    }
  };

  return (
    <>
      <Form.Check
        onChange={listChangeHandler}
        inline
        type="checkbox"
        name="bookStatus"
        id={`favorite`}
        label={props.checked ? `Unmark Favorite` : `Mark Favorite`}
        checked={props.checked}
      />
    </>
  );
};
export default FavoriteButton;
