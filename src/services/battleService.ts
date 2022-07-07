import axios from "axios";

async function getFighterRepos(username: string) {
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  return data;
}
