import Github from "../../../../../src/services/users/github.service";

const REQUIRED_PROPS = ["id", "name", "avatar_url", "url", "source"];

describe("github.services.js", () => {
  describe(".getUsers():", () => {
    it("must return until five users", async () => {
      const users = await Github.getUsers("facku");
      expect(users.length).toBeLessThanOrEqual(5);
    });

    it(`each user must have this props: ${REQUIRED_PROPS.join()}`, async () => {
      const users = await Github.getUsers("facku");
      for (const user of users) {
        for (const prop of REQUIRED_PROPS) {
          const hasName = Object.prototype.hasOwnProperty.call(user, prop);
          expect(hasName).toBeTruthy();
        }
      }
    });
  });

  describe(".getUserInfo():", () => {
    it("user login prop match with query string", async () => {
      const user = "facku";
      const userInfo = await Github.getUserInfo(user);

      expect(userInfo.login).toEqual(user);
    });
  });
});
