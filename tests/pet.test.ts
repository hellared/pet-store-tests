import got from "got";
import { strict as assert } from "assert";

describe("Pet", function() {
    it("can be received by his id", async function() {
        const response = await got("http://93.126.97.71:10080/api/pet/2")
        const body = JSON.parse(response.body);
        assert(body.id == 2, `Expected API return pet with id 2, but instead got with ${body.id}`)
    })
});