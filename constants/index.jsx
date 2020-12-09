const GITHUB_BASE_URL = "https://api.github.com";
const GITLAB_BASE_URL = "https://gitlab.com/api/v4";
const USERS_ENDPOINT = "users";
const GITLAB_USER_PARAM = "username";
const GITLAB_TOKEN="private_token=ibRDxD17x9NMY2vGtjW6"

export const GITHUB_URL = `${GITHUB_BASE_URL}/${USERS_ENDPOINT}`;
export const GITLAB_URL = `${GITLAB_BASE_URL}/${USERS_ENDPOINT}?${GITLAB_TOKEN}`;
export const GITLAB_USER = `${GITLAB_BASE_URL}/${USERS_ENDPOINT}?${GITLAB_USER_PARAM}`;