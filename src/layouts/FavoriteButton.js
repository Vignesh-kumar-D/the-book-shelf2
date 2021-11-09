import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import updateLists from "../APICall/updateLists";
import { stateAction } from "../store/app-state";
const FavoriteButton = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const myList = useSelector((state) => state.myList);
  const listChangeHandler = async (event) => {
    const body = {
      id: props.id,
      title: props.title,
      subtitle: props.subtitle,
      thumbnail: props.thumbnail,
      previewLink: props.previewLink,
      checked: true,
    };
    if (event.target.checked === true) {
      const existingItem = myList.filter((item) => props.id === item.id);
      let favoriteItemKey;
      if (existingItem.length !== 0) {
        body.checked = true;
        body.key = existingItem[0].key;
        body.myList = existingItem[0].myList;
        favoriteItemKey = await updateLists("PUT", userId, body, "lists");
        dispatch(stateAction.updateMyList(body));
      } else {
        favoriteItemKey = await updateLists("POST", userId, body, "lists");
        body.key = favoriteItemKey;
        dispatch(stateAction.addMyList(body));
      }
    } else {
      const existingItem = myList.filter((item) => props.id === item.id);

      if (existingItem.length !== 0 && existingItem[0].myList !== undefined) {
        body.checked = false;

        body.key = existingItem[0].key;
        body.myList = existingItem[0].myList;
        await updateLists("PUT", userId, body, "lists");
        dispatch(stateAction.updateMyList(body));
      } else {
        const deleteFavorite = myList.filter((item) => props.id === item.id);
        dispatch(stateAction.removeFavorite(deleteFavorite));

        updateLists("DELETE", userId, { key: deleteFavorite[0].key }, "lists");
      }
    }
  };

  return (
    <>
      <Form.Check
        onChange={listChangeHandler}
        inline
        type="checkbox"
        name="bookStatus"
        id={`lists`}
        label={props.checked ? `Unmark Favorite` : `Mark Favorite`}
        defaultChecked={props.checked}
      />
    </>
  );
};
export default FavoriteButton;
