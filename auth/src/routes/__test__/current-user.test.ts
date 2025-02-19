import request from "supertest";
import { app } from "../../app";
import { signin } from "../../test/utils/user-auth.utils";

it("responds with details about the current user", async () => {
  const authResponse = await signin();

  const cookie = authResponse[0]; // supertest otomatik olarak cookie yönetemediği için yaptık

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
