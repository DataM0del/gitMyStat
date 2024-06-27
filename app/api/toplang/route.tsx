import Error from "../Error";
import generateSvg from "@/helpers/generateSvg";
import Send from "@/helpers/send";
import { getData } from "@/helpers/getData";
import TopLang from "./TopLang";
import LangData from "@/utils/languages";
import { ThemeData } from "@/types/Theme";
import BarLang from "./BarLang";
import calculateLanguageStats from "@/helpers/calculate";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { user, color, accent, background, border, radius, padding, tip } =
    getData(searchParams);

  const theme: ThemeData = {
    user: user ?? "rahuletto",
    color: color ?? "#E6EDF3",
    accent: accent ?? "#8D96A0",
    background: background ?? "#0D1116",
    border: border ?? "#30363D",
    radius: radius ?? 24,
    padding: padding ?? 24,
  };

  const hasBar = searchParams.has("bar");
  const bar = hasBar ? searchParams.get("bar") : "false";

  try {
    const rawdata = await LangData(user || "rahuletto");

    if (rawdata.data.user.repositories.edges.length == 0 || (rawdata.errors && rawdata.errors[0])) {
      const image = await generateSvg(
        Error(theme, {
          message: (rawdata.errors ? rawdata.errors[0]?.message : `There is no user with username "${user}"`),
          code: (rawdata.errors ? rawdata.errors[0]?.type : "NOT_FOUND"),
        }),
        {
          width: 500,
          height: 170,
        }
      );

      return Send(image);
    }

    const result = calculateLanguageStats(rawdata);

    if (bar === "true") {
      const image = await generateSvg(BarLang(result, theme), {
        width: 300,
        height: 327,
      });

      return Send(image);
    } else {
      const image = await generateSvg(TopLang(result, theme), {
        width: 300,
        height: 260,
      });

      return Send(image);
    }
  } catch (err: any) {
    console.warn(err);
    const image = await generateSvg(
      Error(theme, {
        message: (err as Error).message,
        code: (err as Error).name,
      }),
      {
        width: 500,
        height: 170,
      }
    );

    return Send(image);
  }
}

export const runtime = "edge";
