import { assert } from "chai";
declare var IdealPostcodes: any;
const { Client } = IdealPostcodes;
const SUCCESS = 200;
const api_key = process.env.VALID_API_KEY || "iddqd";
const client = new Client({ api_key });

describe("Client integration test", () => {
  describe("ping", () => {
    it("pings /", async () => {
      try {
        const response = await client.ping();
        assert.equal(response.httpStatus, SUCCESS);
      } catch (error) {
        return error;
      }
    });
  });
});
