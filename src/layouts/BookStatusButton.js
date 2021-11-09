import { Form } from "react-bootstrap";
import updateLists from "../APICall/updateLists";
import { useSelector, useDispatch } from "react-redux";
import { stateAction } from "../store/app-state";
const BookStatusButton = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const myList = useSelector((state) => state.myList);
  const changeValueHandler = async (event) => {
    const body = {
      id: props.id,
      title: props.title,
      subtitle: props.subtitle,
      thumbnail: props.thumbnail,
      previewLink: props.previewLink,
      myList: event.target.value,
      checked: props.checked,
    };
    const tempListItem = myList.filter((item) => item.id === props.id);
    if (tempListItem[0]?.key) {
      body.key = tempListItem[0].key;
      body.checked = tempListItem[0].checked ? tempListItem[0].checked : false;

      await updateLists("PUT", userId, body, "lists");
      dispatch(stateAction.updateMyList(body));
    } else {
      const res = await updateLists("POST", userId, body, "lists");
      body.key = res;
      dispatch(stateAction.addMyList(body));
    }
  };
  let read, reading, toBeRead;
  if (props.myList === "read") {
    read = true;
    reading = false;
    toBeRead = false;
  } else if (props.myList === "reading") {
    reading = true;
    toBeRead = false;
    read = false;
  } else if (props.myList === "toBeRead") {
    toBeRead = true;
    read = false;
    reading = false;
  }

  return (
    <>
      <div>
        <Form.Check
          onChange={changeValueHandler}
          inline
          type="radio"
          name="bookStatus"
          value="read"
          id={`bookStatus`}
          label={`Read this Book`}
          checked={read}
        />
        <Form.Check
          onChange={changeValueHandler}
          inline
          type="radio"
          name="bookStatus"
          value="reading"
          id={`bookStatus`}
          label={`Currently Reading this Book`}
          checked={reading}
        />
        <Form.Check
          inline
          type="radio"
          name="bookStatus"
          id={`bookStatus`}
          value="toBeRead"
          label={`Going to Read this book`}
          checked={toBeRead}
          onChange={changeValueHandler}
        />
      </div>
    </>
  );
};
export default BookStatusButton;
