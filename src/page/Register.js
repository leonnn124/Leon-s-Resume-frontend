import React, { useEffect } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  register,
  selectUser,
  clearState,
  guestLogin,
} from "../redux/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [userName, setuserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [passWord, setPassWord] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError } = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({ name: userName, email: userEmail, password: passWord })
    );
  };

  const handleGuestLogin = () => {
    dispatch(guestLogin());
  };

  if (disabled === true) {
    if (userName !== "" && userEmail !== "" && passWord !== "") {
      setDisabled(false);
    }
  } else if (disabled === false) {
    if (userName === "" || userEmail === "" || passWord === "") {
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
    if (isError) {
      toast.error("格式錯誤或已註冊");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="register">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <a href="/login" className="pre-page">
          <i className="fa-solid fa-arrow-left"></i>
        </a>

        <h1>Sign In</h1>
        <div className="textb">
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <div className="placeholder">Username</div>
        </div>

        <div className="textb">
          <input
            required
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <div className="placeholder">Email</div>
        </div>

        <div className="textb">
          <input
            type="password"
            required
            value={passWord}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
          <div className="placeholder">Password</div>
        </div>

        <button
          className="registerbtn fas fa-arrow-right"
          disabled={disabled}
          type="submit"
        ></button>

        <label onClick={handleGuestLogin}>Login As Guest</label>
      </form>
    </div>
  );
};

export default Register;
