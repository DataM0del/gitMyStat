import data from "./github/repositories";
export default async function RepoList(user: string) {
  return await data(user);
}
