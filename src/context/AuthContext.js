import api from "../apis";
import {
  AUTHENTICATE,
  CLEAR_ERROR,
  LOG_ERROR,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "./actions";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import { flows } from "../paths";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        errorMessage: "",
      };

    case LOG_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CLEAR_ERROR:
      return { ...state, errorMessage: "" };

    case SIGN_OUT:
      return { ...state, token: "", errorMessage: "" };

    default:
      return state;
  }
};

const sign_up =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("signup", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("@token", token);

      dispatch({
        type: AUTHENTICATE,
        payload: { email, token },
      });

      navigate(flows.mainFlow);
    } catch (error) {
      dispatch({
        type: LOG_ERROR,
        payload: "Sometihng went wrong when creating an account!",
      });
    }
  };

const sign_in =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("signin", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("@token", token);

      dispatch({ type: AUTHENTICATE, payload: { email, token } });

      navigate(flows.mainFlow);
    } catch (error) {
      dispatch({
        type: LOG_ERROR,
        payload: "Sometihng went wrong with sign in!",
      });
    }
  };

const sign_out = (dispatch) => async () => {
  await AsyncStorage.removeItem("@token");
  dispatch({ type: SIGN_OUT });
  navigate(flows.loginFlow);
};

const clearErrorMessage = (dispatch) => () => dispatch({ type: CLEAR_ERROR });

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("@token");

  if (token) {
    dispatch({ type: AUTHENTICATE, payload: { token, email: "" } });
    navigate(flows.mainFlow);
  } else {
    navigate(flows.loginFlow);
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { sign_in, sign_out, sign_up, clearErrorMessage, tryLocalSignin },
  {
    token: "",
    errorMessage: "",
  }
);
