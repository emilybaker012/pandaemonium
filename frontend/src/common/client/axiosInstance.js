import axios from 'axios';

// Create axios instance
const axiosClient = axios.create();

// Set base url
axiosClient.defaults.baseURL = process.env.BASE_URL;

// Set default headers
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

axiosClient.defaults.withCredentials = true;

// Set default timeout
axiosClient.defaults.timeout = 2000; // Wait 2 sec

const getReq = (URL) => {
  return axiosClient.get(`/${URL}`).then((response) => { return response; });
};

const postReq = (URL, payload, config) => {
  return axiosClient.post(`/${URL}`, payload, config).then((response) => { return response; });
};

const patchReq = (URL, payload) => {
  return axiosClient.patch(`/${URL}`, payload).then((response) => { return response; });
};

const deleteReq = (URL, payload) => {
  return axiosClient.delete(`/${URL}`, payload).then((response) => { return response; });
};

export {
  getReq, postReq, patchReq, deleteReq,
};
