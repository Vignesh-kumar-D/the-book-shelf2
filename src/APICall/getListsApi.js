import { stateAction } from "../store/app-state";

const getListsApi = async (getLists, userId, dispatch) => {
  getLists.forEach(async (item) => {
    const res = await fetch(
      `https://the-book-shelf-84b91-default-rtdb.firebaseio.com/users/${userId}/${item}.json`
    );
    const data = await res.json();
    const tempArray = [];
    for (let key in data) {
      tempArray.push({
        key: key,
        id: data[key].id,
        title: data[key].title,
        subtitle: data[key].subtitle,
        thumbnail: data[key].thumbnail,
        previewLink: data[key].previewLink,
        myList: data[key].myList ? data[key].myList : null,
        checked: data[key].checked ? data[key].checked : null,
      });
    }
    if (item === "favorites") dispatch(stateAction.getFavorite(tempArray));
    else dispatch(stateAction.getLists(tempArray));
  });
};

export default getListsApi;
