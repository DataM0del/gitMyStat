import githubData from "./github/languages";
import { RawLanguageData } from "@/types/Languages";

export default async function LangData(user: string) {
  return await githubData(user);
}