import Gitlab from "../../../../../src/services/users/gitlab.service";

const REQUIRED_PROPS = ["id", "name", "avatar_url", "url", "source"];

describe("gitlab.service.js", () => {
  describe(".getUsers():", () => {
    it("must return until five users", async () => {
      const users = await Gitlab.getUsers("facku");
      expect(users.length).toBeLessThanOrEqual(5);
    });

    it(`each user must have this props: ${REQUIRED_PROPS.join()}`, async () => {
      const users = await Gitlab.getUsers("facku");
      for (const user of users) {
        for (const prop of REQUIRED_PROPS) {
          const hasName = Object.prototype.hasOwnProperty.call(user, prop);
          expect(hasName).toBeTruthy();
        }
      }
    });
  });
});
