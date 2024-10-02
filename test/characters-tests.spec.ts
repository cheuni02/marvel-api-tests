import { expect } from "chai";
import axiosInstance from "../config/axiosConfig";
import "dotenv/config";
require("dotenv").config();

describe("test suite for /v1/public/characters endpoint", () => {
  let testCharacterIdNameMap = new Map<number, string>();
  testCharacterIdNameMap.set(1009150, "Agent Zero");
  testCharacterIdNameMap.set(1011031, "Agent X (Nijo)");

  let testArr = ["john", "uvan", "mcgregor"];

  it("should be able to retrieve a list of characters", (done) => {
    axiosInstance
      .get("/v1/public/characters")
      .then((response) => {
        expect(response.status).to.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it("should be able to fetch a single character by id", () => {
    testCharacterIdNameMap.forEach((characterName, characterId) => {
      axiosInstance
        .get(`/v1/public/characters/${characterId}`)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.data.data.results[0].name).to.equal(characterName);
        })
        .catch((err) => console.log(err));
    });
  });
});
