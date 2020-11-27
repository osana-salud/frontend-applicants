import { getItemsByLimit } from "./getItemsByLimit";

export const getMappedUsers = ({ arr, service, limit = arr.length }) =>
  getItemsByLimit(arr, limit).map((user) => ({
    id: user.id,
    username: user[`${service === "github" ? "login" : "username"}`],
    service,
  }));
