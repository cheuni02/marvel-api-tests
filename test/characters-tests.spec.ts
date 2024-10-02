import { expect } from "chai";
import axiosInstance from "../config/axiosConfig";
import "dotenv/config";
require("dotenv").config();

describe("test suite for /v1/public/characters endpoint", () => {
  it("should be able to retrieve a list of characters", (done) => {
    axiosInstance
      .get("/v1/public/characters")
      .then((response) => {
        console.log("res: " + JSON.stringify(response.data, null, 2));
        expect(response.status).to.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it("should be able to fetch a single character by id", () => {});
});
