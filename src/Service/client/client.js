import axios from "axios";
import Qs from "qs";
const baseURL = "https://api.evagon.uz/api/";

// publik Intansce
const publickInstance = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => Qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

publickInstance.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publickInstance.interceptors.response.use(
  (response) => {
    if (response & response.data) return response.data;
    return response;
  },
  (error) => {
    if (error.response.status) {
      throw error.response.data;
    }
    return Promise.reject(error);
  }
);

// publik Intansce For Media Data

// private inatmce

const privateInstance = axios.create({
  baseURL,
  paramsSerializer: (params) => {
    const serializedParams = Qs.stringify(params, { arrayFormat: "brackets" });
    return serializedParams;
  },
});

privateInstance.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  };
});

privateInstance.interceptors.response.use(
  (response) => {
    if (response & response.data) return response.data;
    return response;
  },
  (error) => {
    if (error.response.status) throw error.response.data;
    return Promise.reject(error);
  }
);

// private Intansce For Media Data
const privateInstanceForMediaData = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => Qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

privateInstanceForMediaData.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken")
      )}`,
    },
  };
});

privateInstanceForMediaData.interceptors.response.use(
  (response) => {
    if (response & response.data) return response.data;
    return response;
  },
  (error) => {
    if (error.response.status) throw error.response.data;
    return Promise.reject(error);
  }
);

export { privateInstance, publickInstance, privateInstanceForMediaData };
