import axios from "axios";
import * as fighterRepository from "../repositories/fighterRepository.js";

async function getFighterRepos(username: string) {
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  return data;
}

export async function find() {
  return fighterRepository.find();
}

async function getFighter(username: string) {
  const fighter = await fighterRepository.findByUsername(username);

  if (!fighter) {
    const createdFighter = await fighterRepository.insert(username);
    return { id: createdFighter.id, username, wins: 0, losses: 0, draws: 0 };
  }

  return fighter;
}

function getFighterStarCount(fighterRepos: any[]) {
  const repoStars = fighterRepos.map((repo) => repo.stargazers_count);
  if (repoStars.length === 0) return 0;

  return repoStars.reduce((current: number, sum: number) => sum + current);
}

async function updateWinnerAndLoserStats(winnerId: number, loserId: number) {
  await fighterRepository.updateStats(winnerId, "wins");
  await fighterRepository.updateStats(loserId, "losses");
}
