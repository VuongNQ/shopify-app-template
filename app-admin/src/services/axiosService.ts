import { AxiosError, AxiosResponse, default as instance } from "axios";

/**
 * @type {import('axios').CreateAxiosDefaults}
 */
const axiosConfig = {
  baseURL: import.meta.env.VITE_ROOT_API + "/api" || "",
  timeout: 60 * 1000,
};

const axiosService = instance.create(axiosConfig);

axiosService.interceptors.request.use(async function (config) {
  // Do something before request is sent
  config.headers.Authorization = `Bearer ${await shopify.idToken()}`;
  return config;
});

const onResponse = (response: AxiosResponse) => {
  const { data } = response;

  const contentType = response.headers["content-type"];
  if (contentType === "application/json") {
    return data;
  }

  return response;
};

const onResponseError = (error: AxiosError) => {
  console.log("error", error);
  const { response } = error;
  return response?.data;
  // return Promise.reject(error);
};

axiosService.interceptors.response.use(onResponse, onResponseError);

export default axiosService;
