import got from "got";
import { strict as assert } from "assert";
import { URLSearchParams } from "url";

describe("Pet", function () {
    it("can be received by his id", async function () {
        const response = await got("http://93.126.97.71:10080/api/pet/2");
        const body = JSON.parse(response.body);
        assert(body.id == 2, `Expected API return pet with id 2, but instead got with ${body.id}`);
    })
    it("can be received by status", async function () {
        let response = await got("http://93.126.97.71:10080/api/pet/findByStatus", {
            searchParams: { status: "available" }
        });
        let body = JSON.parse(response.body);
        assert(body.length > 0);

        response = await got("http://93.126.97.71:10080/api/pet/findByStatus", {
            searchParams: { status: "pending" }
        });
        body = JSON.parse(response.body);
        assert(body.length > 0);

        response = await got("http://93.126.97.71:10080/api/pet/findByStatus", {
            searchParams: { status: "sold" }
        });
        body = JSON.parse(response.body);
        assert(body.length > 0);

        response = await got("http://93.126.97.71:10080/api/pet/findByStatus", {
            searchParams: new URLSearchParams( { status: ["sold", "available"] })
        });
        body = JSON.parse(response.body);
        assert(body.length > 0);
    });

    it("can be received by tags", async function () { });
});