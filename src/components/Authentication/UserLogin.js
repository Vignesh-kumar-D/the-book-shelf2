import { useState } from "react";
import { useDispatch } from "react-redux";
import API_KEY from "../../config";
import loginCall from "../../APICall/loginCall";
import { stateAction } from "../../store/app-state";
import LoginForm from "./LoginForm";
const UserLogin = (props) => {
  const [error, setError] = useState(null);
  const FormValidate = (enteredEmail, enteredPassword) => {
    if (
      enteredEmail.current.value.trim() === "" ||
      enteredPassword.current.value.trim() === ""
    ) {
      setError("Email or Password is Empty");
      return false;
    }
    if (enteredPassword.current.value.length < 6) {
      setError("Password should have at least 6 characters");
      return false;
    }
    return true;
  };
  const dispatch = useDispatch();
  const giveError = (error) => {
    setError(error.split("_").join(" "));
  };
  const getResponse = (response) => {
    dispatch(stateAction.login(response));
  };
  const loginHandler = async (event, enteredEmail, enteredPassword) => {
    event.preventDefault();
    let url;
    if (event.target.innerText === "Login") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    if (!FormValidate(enteredEmail, enteredPassword)) return;
    try {
      await loginCall(
        url,
        {
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
          returnSecureToken: true,
        },
        giveError,
        getResponse
      );
    } catch (Error) {
      // setError(errorMessage);
    }
  };

  const clearError = (event) => {
    setError(null);
  };
  return (
    <LoginForm
      clearError={clearError}
      getResponse={getResponse}
      loginHandler={loginHandler}
      error={error}
    />
  );
};

export default UserLogin;
