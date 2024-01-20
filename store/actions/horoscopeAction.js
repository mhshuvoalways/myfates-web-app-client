import * as Types from "../constants/horoscopeTypes";
import axios from "../../utils/axios";
import notiAction from "./notiAction";
import enableBtn from "./btnAction";

export const horoAdd = (data, router) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/horo/horoadd", data)
    .then((response) => {
      dispatch({
        type: Types.HOROSCOPE_ADD,
        payload: response.data,
      });
      dispatch(enableBtn(true));
      router.push(`/horoscope/result?type=${router.query.type}`);
    })
    .catch((err) => {
      dispatch({
        type: Types.HOROSCOPE_ADD_ERROR,
        payload: err.response.data,
      });
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
    });
};

export const horoGet = () => (dispatch) => {
  axios
    .get("/horo/horoget")
    .then((response) => {
      dispatch({
        type: Types.HOROSCOPE_GET,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.HOROSCOPE_GET_ERROR,
        payload: err.response.data,
      });
      dispatch(notiAction(err.response?.data.message));
    });
};
