import router from "./routes/moods.js";
import request from "supertest";

test("API response is as expected", async function () {
  await request(router).get("/").expect(200);
});

//   {
//  *      success: true
//  *    }
//  */
// test("Has the structure { success: true }", function () {
//   const apiResponse = {
//     success: true,
//   };
//   const expected = {
//     success: true,
//   };
//   expect(apiResponse).toStrictEqual(expected);
//   });
