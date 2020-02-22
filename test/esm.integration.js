import { Client } from "core-browser.esm.min.js";

const SUCCESS = 200;
const api_key = "iddqd";
const client = new Client({ api_key });

describe("Client integration test", () => {
  describe("ping", () => {
    it("pings /", async () => {
      try {
        const response = await client.ping();
        if (response.httpStatus !== 200) throw new Error("Invalid response");
      } catch (error) {
        return error;
      }
    });
  });
});
