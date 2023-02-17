import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import detailLogo from "../../images/DetailLogo.png";
import { authActions } from "../../redux/authRedux";
import Button from "../../components/UI/Button/Button";
import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  // dispatch(authActions.loginStart());
  // try {
  //   const res = await axiosInstance.post("/auth/login", {
  //     username: usernameRef.current.value,
  //     password: passwordRef.current.value,
  //   });
  //   dispatch(authActions.loginSuccess(res.data));
  //   navigate("/visualization", { replace: true });
  // } catch (err) {
  //   dispatch(authActions.loginFailure());
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    console.log(username);
    dispatch(authActions.login(username));
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://hmd90nacb0.execute-api.ap-south-1.amazonaws.com/default/modify/totalUsers",
  //       {
  //         mode: "no-cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //     const data = await response.json();
  //     console.log("data:" + data);
  //   };
  //   fetchData();
  // });
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        <img src={detailLogo} alt="logo" />
      </div>
      {/* <h5></h5> */}
      <div className={classes.loginForm}>
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <div className={classes.inputContainer}>
              <input
                type="text"
                name="uname"
                ref={usernameRef}
                placeholder="UserId*"
                required
              />
            </div>
            <div className={classes.inputContainer}>
              <input
                type="password"
                name="pass"
                ref={passwordRef}
                placeholder="Password*"
                required
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button name="Login" bgcolor="#114A62" bordercolor="#114A62" />
            </div>
            <div className={classes.linkContainer}>
              <a className={classes.link} href="*">
                Forgot password
              </a>
              <a className={classes.link} href="*">
                Contact us
              </a>
            </div>
          </form>
        </div>
      </div>
      <p>©2022 Myelin Foundry PVT. Ltd. All rights reserved.</p>
    </div>
  );
};

export default Login;

// // "proxy": "https://hmd90nacb0.execute-api.ap-south-1.amazonaws.com"

// import React from "react";

// const Login = () => {
//   return <div>Login</div>;
// };

// export default Login;
