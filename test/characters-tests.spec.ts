import { expect } from "chai";
import axiosInstance from "../config/axiosConfig";
import axios from "axios";
import fetch from "node-fetch";
import "dotenv/config";
import { md5 } from "js-md5";
require("dotenv").config();

const { BASE_URL, PUB_API_KEY, PRIV_API_KEY, TIMESTAMP } = process.env;
const hash = md5(
  String(TIMESTAMP).concat(String(PRIV_API_KEY)).concat(String(PUB_API_KEY))
);
console.log("hash: "+ hash);
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  ts: TIMESTAMP,
  apikey: PUB_API_KEY,
  hash,
};
axios.defaults.headers.post["Content-Type"] = "application/json";



describe("test suite for /v1/public/characters endpoint", () => {
  
  it("should be able to retrieve a list of characters", (done) => {
    axios
      .get(
        "/v1/public/characters"
      )
      .then((response) => {
        console.log("res: " + JSON.stringify(response.data, null, 2));
        expect(response.status).to.equal(200);
        done();
      })
      .catch((err) => done(err));
  });


  it("should be able to fetch a single character by id", () => {});
});
