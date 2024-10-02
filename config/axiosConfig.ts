import axios from 'axios';
import { md5 } from "js-md5";
import "dotenv/config";
require("dotenv").config();

const { BASE_URL, PUB_API_KEY, PRIV_API_KEY, TIMESTAMP } = process.env;
const hash = md5(
  String(TIMESTAMP).concat(String(PRIV_API_KEY)).concat(String(PUB_API_KEY))
);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.params = {
  ts: TIMESTAMP,
  apikey: PUB_API_KEY,
  hash,
};

export default axiosInstance;