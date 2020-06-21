const request = require("supertest");
const server = request("http://mywebsite.com");
const cookie = "zpg_use_ww2_win_valuation_journey=optin_win_5_new_valuation";


describe("Test localhost server", () => {
    test("/github returns 200", () => {
        return server.get("/github").then(res => {
            expect(res.status).toBe(200);
        });
    });

    test("/bitbucket returns 200", () => {
        return server.get("/bitbucket").then(res => {
            expect(res.status).toBe(200);
        });
    });

    test("/bitbucket returns 200", () => {
        return server.get("/bitbucket").then(res => {
            expect(res.status).toBe(200);
        });
    });

    test.each`
        cookie_input             |       cookie_output
        ${'site=github;'}        |       ${'site=github;'}
        ${'site=bitbucket;'}     |       ${'site=bitbucket;'}
    `('$cookie_input, $cookie_output', async ({cookie_input, cookie_output}) => {
        return server.get("/git").set("Cookie", [cookie_input]).then(res => {
            expect(res.status).toBe(200);
            expect(res.header['set-cookie']).toEqual(expect.arrayContaining([cookie_output]));
        });
    });


});