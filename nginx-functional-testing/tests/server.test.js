const request = require("supertest");
const server = request("http://mywebsite.com");

describe("Test localhost server", () => {
    test("/washington returns 200", () => {
        return server.get("/washington").then(res => {
            expect(res.status).toBe(200);
            expect(res.body.toString()).toBe("Washington response body");
        });
    });

    test("/example returns 200", () => {
        return server.get("/example").then(res => {
            expect(res.status).toBe(200);
            expect(res.body.toString()).toBe("Example response body");
        });
    });

    test.each`
        cookie_input                |       cookie_output
        ${'site=washington;'}       |       ${'site=washington;'}
        ${'site=example;'}          |       ${'site=example;'}
    `('$cookie_input, $cookie_output', async ({cookie_input, cookie_output}) => {
        return server.get("/site").set("Cookie", [cookie_input]).then(res => {
            expect(res.status).toBe(200);
            expect(res.header['set-cookie']).toEqual(expect.arrayContaining([cookie_output]));
        });
    });


});