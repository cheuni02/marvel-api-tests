import { expect } from "chai";
import axiosInstance from "../config/axiosConfig";
import "dotenv/config";
require("dotenv").config();

describe("test suite for /v1/public/characters endpoint", () => {
  let testCharacterIdNameMap = new Map<number, string>();
  testCharacterIdNameMap.set(1009150, "Agent Zero");
  testCharacterIdNameMap.set(1011031, "Agent X (Nijo)");

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
          console.log("response: " + (response.data.data.results[0].name));
          expect(response.data.data.results[0].name).to.equal(characterName);
        })
        .catch((err) => console.log(err));
    });
  });

  context("should be able to fetch lists of comics filtered a character id", () => {

    const expectedTestValues = {
      1009150: "Life of Wolverine Infinity Comic (2022) #6",
      18132: "X-Men Unlimited (1993) #3",
    };

    it.only(`test`, () => {
      console.log(expectedTestValues[18132]);
    });
    
    it(`first comic for ${testCharacterIdNameMap.get(
      1009150
    )} is "Life of Wolverine Infinity Comic (2022) #6"`, (done) => {
      axiosInstance
        .get("/v1/public/characters/1009150/comics")
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.data.data.results[0].title).to.equal(
            "Life of Wolverine Infinity Comic (2022) #6"
          );
          done();
        })
        .catch((err) => console.log(err));
    });
    
    it(`last comic for ${testCharacterIdNameMap.get(
      1009150
    )} is "Life of Wolverine Infinity Comic (2022) #6"`, (done) => {
      axiosInstance
        .get("/v1/public/characters/1009150/comics")
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.data.data.results[0].title).to.equal(
            "Life of Wolverine Infinity Comic (2022) #6"
          );
          done();
        })
        .catch((err) => console.log(err));
    });
  });
});
