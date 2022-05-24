import React, { useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser, clearState } from "../redux/userSlice";

const Login = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const [passWord, setPassWord] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess } = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: userEmail, password: passWord }));
  };

  if (disabled === true) {
    if (userEmail !== "" && passWord !== "") {
      setDisabled(false);
    }
  } else if (disabled === false) {
    if (userEmail === "" || passWord === "") {
      setDisabled(true);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/board");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="login">
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <a href="/" className="pre-page">
          <i className="fa-solid fa-arrow-left"></i>
        </a>

        <h1>Login</h1>
        <div className="textb">
          <input
            type="text"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            required
          />
          <div className="placeholder">Email</div>
        </div>

        <div className="textb">
          <input
            type="password"
            value={passWord}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
            required
          />
          <div className="placeholder">Password</div>
        </div>

        <button
          className="btn fas fa-arrow-right"
          disabled={disabled}
          type="submit"
        ></button>
        <a href="/register">Create Account</a>
      </form>
    </div>
  );
};

export default Login;
