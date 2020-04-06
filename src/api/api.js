import axios from "axios";
import {BASE_URL} from "../constants.js";

const Error = {
  UNAUTHORIZED: 401,
  REQUEST_ERRORS: [400, 404, 500],
};

export const createAPI = (onRequestFail, onUnauthorized) => {
  const api = axios.create({
    baseURL: `${BASE_URL}/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (Error.REQUEST_ERRORS.includes(response.status)) {
      onRequestFail(response.status);
      return err;
    }

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      return err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
