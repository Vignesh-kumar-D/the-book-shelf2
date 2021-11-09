import NavbarHeader from "./components/Header/NavBar";
import Login from "./components/Authentication/UserLogin";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getListsApi from "./APICall/getListsApi";
import { stateAction } from "./store/app-state";

function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetail"));
    if (userDetails)
      dispatch(
        stateAction.login({
          localId: userDetails.userId,
          idToken: userDetails.tokenId,
        })
      );
  }, [dispatch]);
  useEffect(() => {
    getListsApi(["favorites", "lists"], userId, dispatch);
  }, [userId, dispatch]);

  return (
    <>
      <NavbarHeader />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Redirect to="/search" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
          {loggedIn ? <Redirect to="/search" /> : <Login />}
        </Route>
        <Route path="/search" exact>
          {loggedIn ? <Search /> : <Redirect to="/login" />}
        </Route>
        <Route path="/mylist" exact>
          {loggedIn ? <MyList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/favorites" exact>
          {loggedIn ? <Favorites /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
