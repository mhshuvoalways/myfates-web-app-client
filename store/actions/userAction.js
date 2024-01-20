import { jwtDecode } from "jwt-decode";
import * as Types from "../constants/userTypes";
import { CLEAR_DATA } from "../constants/clearDataType";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import notiAction from "./notiAction";
import enableBtn from "./btnAction";

export const register = (user, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/user/register", user)
    .then((response) => {
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      typeof window !== "undefined" &&
        localStorage.setItem("token", response.data.token);
      navigate.push("/");
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
    });
};

export const userLogin = (user, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/user/login", user)
    .then((response) => {
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      typeof window !== "undefined" &&
        localStorage.setItem("token", response.data.token);
      navigate.push("/");
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response?.data,
        },
      });
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
    });
};

export const userLoginwithGoogle = (access_token, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  const userInfoEndpoint = "https://www.googleapis.com/oauth2/v2/userinfo";
  fetch(userInfoEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      axios
        .post("/user/registergoogle", response)
        .then((finalRes) => {
          setAuthToken(finalRes.data.token);
          typeof window !== "undefined" &&
            localStorage.setItem("token", finalRes.data.token);
          navigate.push("/");
          dispatch(enableBtn(true));
        })
        .catch((err) => {
          dispatch({
            type: Types.LOGIN_USER_ERROR_GOOGLE,
            payload: {
              error: err.response?.data,
            },
          });
          dispatch(enableBtn(true));
          dispatch(notiAction(err.response?.data.message));
        });
    })
    .catch(() => {
      dispatch(notiAction("Login failed! Try again"));
    });
};

export const isAuthenticate = () => (dispatch) => {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  if (token) {
    var decoded = jwtDecode(token);
    var dateNow = new Date();
    if (decoded.exp * 1000 < dateNow.getTime()) {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: false,
        },
      });
      typeof window !== "undefined" && localStorage.removeItem("token");
    } else {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: true,
        },
      });
      dispatch(getMyAccount());
    }
  } else {
    dispatch({
      type: Types.ISAUTHENTICATE,
      payload: {
        isAuthenticate: false,
      },
    });
    setAuthToken("");
  }
};

export const getMyAccount = () => (dispatch) => {
  axios
    .get("/user/getmyaccount")
    .then((res) => {
      dispatch({
        type: Types.GET_MYACCOUT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MYACCOUT,
        payload: err.response?.data,
      });
    });
};

export const userUpdate = (userValue, router) => (dispatch) => {
  dispatch(enableBtn(false));
  dispatch(notiAction(""));
  axios
    .put("/user/paymentuser", userValue)
    .then((res) => {
      dispatch({
        type: Types.USER_UPDATE,
        payload: res.data.response,
      });
      dispatch(notiAction(res.data.message));
      dispatch(enableBtn(true));
      router.push("/");
    })
    .catch((err) => {
      dispatch(notiAction(err.response?.data.message));
      dispatch(enableBtn(true));
    });
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  dispatch({
    type: CLEAR_DATA,
  });
  typeof window !== "undefined" && localStorage.removeItem("token");
  setAuthToken("");
  navigate.push("/login");
};
