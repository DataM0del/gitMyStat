import { generateColor } from "@/helpers/getColor";
import { ThemeData } from "@/types/Theme";
import { WakaData } from "@/types/Waka";
import { colors } from "@/utils/colors";

export default function BarWaka(data: WakaData, theme: ThemeData) {
  return (
    <div
      tw={`h-full w-full flex flex-col items-center justify-start bg-[${
        theme.background
      }] border-2 border-solid border-[${theme.border}] rounded-[${
        theme.radius
      }px] py-[${theme.padding}px] px-[${theme.padding * 1.2}px] `}
    >
      <div tw={`text-[${theme.accent}] text-base font-medium mb-4`}>
        Most used languages
      </div>

      <div tw="flex h-2 w-full bg-[${theme.border}] rounded-lg overflow-hidden">
        {data.languages.map((language, index) => (
          <div
            key={index}
            style={{
              width: `${language.percent}%`,
              backgroundColor: colors[language.name] || generateColor(language.name),
            }}
            tw="flex justify-center items-center text-white text-xs"
            title={`${language.name}: ${language.percent.toFixed(2)}%`}
          />
        ))}
      </div>
      <div tw="flex w-full flex-col mt-6" style={{ gap: 6 }}>
        {data.languages.slice(0, 6).map((language) => (
          <Percent
            key={language.name}
            language={language.name}
            percent={language.percent}
            color={colors[language.name] ?? generateColor(language.name)}
            theme={theme}
          />
        ))}
      </div>
      <div tw={`absolute bottom-2 text-sm text-[${theme.tip}] right-3`}>
        wakatime
      </div>
    </div>
  );
}

function Percent({
  language,
  percent,
  color,
  theme,
}: {
  language: string;
  percent: number;
  color: string;
  theme: ThemeData;
}) {
  return (
    <div tw="flex items-center justify-between w-full">
      <div tw="flex items-center" style={{ gap: 8 }}>
        <div tw={`h-2 w-2 rounded-full bg-[${color}]`} />
        <span tw={`text-lg text-bold text-[${theme.color}]`}>{language}</span>
      </div>
      <div tw={`flex text-[${theme.accent}] text-base opacity-80`}>
        {percent.toFixed(2)}%
      </div>
    </div>
  );
}
