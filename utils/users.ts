import data from "./github/users";

export default async function UserData(user: string) {
  return await data(user);
}
