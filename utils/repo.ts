import data from "./github/repo";

export default async function RepoData(user: string, repo: string) {
  return data(user, repo);
}
