import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        data-theme="default"
        id="hero"
        className="flex h-[97vh] flex-col items-center justify-center gap-12"
      >
        <Image
          src="/gitmystat.png"
          alt="Logo"
          className="scale-80 lg:scale-100"
          width={200}
          height={200}
        />
        <h1 className="text-center text-4xl font-bold lg:text-6xl">
          gitMyStat!
        </h1>
        <p className="max-w-[400px] text-center text-lg font-medium text-accent lg:max-w-none lg:text-xl">
          Turn your (insert Git provider here) activity into sleek stats and
          cool visuals
        </p>
      </section>
      <section
        data-theme="default"
        id="features"
        className="flex min-h-screen w-full flex-col justify-center gap-32 border-t-2 border-solid border-light-border bg-light-background px-12 py-16 lg:flex-row lg:px-48 dark:border-dark-border dark:bg-dark-background"
      >
        <div className="flex flex-col items-start gap-12 lg:items-start lg:justify-center">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-4xl font-bold text-light-color dark:text-dark-color">
              Turn your stats into eyecandy
            </h2>
            <p className="max-w-[800px] text-xl font-medium text-light-accent dark:text-dark-accent">
              gitMyStat! is a helpful project that generates an image svg with
              your (insert Git provider here) stats and activity in a sleek and
              modern way.
            </p>
          </div>
          <picture>
            <source
              srcSet="/top?username=rahuletto&layout=bar"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={300}
              height={260}
              loading="lazy"
              src="/top?username=rahuletto&layout=bar&theme=light"
              alt="Top languages"
            />
          </picture>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-col-reverse lg:items-center lg:justify-center">
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <h2 className="text-left text-4xl font-bold text-light-color lg:text-right dark:text-dark-color">
              Modernized
            </h2>
            <p className="max-w-[800px] text-left text-xl font-medium text-light-accent lg:text-right dark:text-dark-accent">
              My mission is to modernize the README visuals of (insert Git
              provider here) with stunning statistics of other{"'"}s work and
              progress.
            </p>
          </div>
          <picture className="flex w-full lg:justify-end">
            <source
              srcSet="/user?username=rahuletto"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={285}
              height={340}
              src="/user?username=rahuletto&theme=light"
              alt="User"
            />
          </picture>
        </div>
      </section>
      <section
        data-theme="dino"
        className="flex min-h-screen w-full flex-col justify-center gap-32 border-t-2 border-solid border-dino-light-border bg-dino-light-background px-12 py-16 lg:flex-row lg:px-48 dark:border-dino-border dark:bg-dino-background"
      >
        <div className="flex flex-col items-start justify-start gap-12 lg:flex-col-reverse lg:items-center lg:justify-center">
          <div className="mx-auto flex flex-col items-start gap-3">
            <h2 className="w-full text-4xl font-bold text-dino-light-color lg:text-center dark:text-dino-color">
              Awesome flavors
            </h2>
            <p className="max-w-[800px] text-xl font-medium text-dino-light-accent lg:mx-auto lg:text-center dark:text-dino-accent">
              Give a little touch of your personal taste to the stats with the
              themes available. Heavily inspired from{" "}
              <Link
                className="font-semibold text-dino-border underline"
                href="https://monkeytype.com"
              >
                MonkeyType
              </Link>{" "}
              themes. But it doesn{"'"}t stop there, you can customize
              everything for your liking.
            </p>
          </div>
          <picture>
            <source
              srcSet="/recent?username=rahuletto&theme=dino"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={410}
              height={110}
              loading="lazy"
              src="/recent?username=rahuletto&theme=dino-light"
              alt="Recent"
            />
          </picture>
        </div>
      </section>

      <section
        data-theme="catppuccin"
        className="flex min-h-screen w-full flex-col justify-center gap-32 border-t-2 border-solid border-catppuccin-light-border bg-catppuccin-light-background px-12 py-16 lg:flex-row lg:px-48 dark:border-catppuccin-background dark:bg-catppuccin-border"
      >
        <div className="flex flex-col items-start gap-12 lg:flex-col-reverse lg:items-start lg:justify-center">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-4xl font-bold text-catppuccin-light-color dark:text-catppuccin-color">
              Soothing Animations
            </h2>
            <p className="max-w-[800px] text-xl font-medium text-catppuccin-light-accent dark:text-catppuccin-accent">
              What{"'"}s better than a static sticker? An animated one! With
              lazy-loading, you can acheive an animated sticker with ease.
            </p>
          </div>
          <picture>
            <source
              srcSet="/wakatime?username=rahuletto&theme=catppuccin&layout=bar"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={300}
              height={337}
              loading="lazy"
              src="/wakatime?username=rahuletto&theme=catppuccin-light&layout=bar"
              alt="Recent"
            />
          </picture>
        </div>

        <div className="flex flex-col items-start gap-12 lg:items-end lg:justify-center">
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <h2 className="text-left text-4xl font-bold text-catppuccin-light-color lg:text-right dark:text-catppuccin-color">
              Well optimized
            </h2>
            <p className="max-w-[800px] text-left text-xl font-medium text-catppuccin-light-accent lg:text-right dark:text-catppuccin-accent">
              Using edge networks, the stats are cached for a longer period of 1
              hour, with benefits of lower latency and improved performance.
            </p>
          </div>
          <picture>
            <source
              srcSet="/wakatime?username=rahuletto&layout=compact&theme=catppuccin"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={480}
              height={130}
              loading="lazy"
              src="/wakatime?username=rahuletto&layout=compact&theme=catppuccin-light"
              alt="Top compact"
            />
          </picture>
        </div>
      </section>
      <section
        data-theme="cyred"
        className="relative flex min-h-screen w-full flex-col items-start justify-evenly gap-32 border-t-2 border-solid border-cyred-light-border bg-cyred-light-background px-12 py-16 lg:items-center lg:px-48 dark:border-cyred-border dark:bg-cyred-background"
      >
        <div className="flex flex-col items-start gap-12 lg:items-center lg:justify-center">
          <div className="mx-auto flex flex-col items-start gap-3">
            <h2 className="w-full text-4xl font-bold text-cyred-light-color lg:text-center dark:text-cyred-color">
              AAAAAAAAA *crash*
            </h2>
            <p className="max-w-[800px] text-xl font-medium text-cyred-light-accent lg:mx-auto lg:text-center dark:text-cyred-accent">
              Imagine, what if these stats are crutial for your README? I got
              you covered with amazing error handling, which tells you what
              {"'"}s wrong instead of{" "}
              <i className="font-bold text-cyred-light-color dark:text-cyred-color">
                silence
              </i>
              .
            </p>
          </div>
          <picture>
            <source
              srcSet="/recent?username=rahulmarban&theme=cyred"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={500}
              height={170}
              loading="lazy"
              src="/recent?username=rahulmarban&theme=cyred-light"
              alt="Error"
            />
          </picture>
        </div>
        <Image src="/fine.jpg" alt="This is fine" width={200} height={200} />
      </section>

      <section
        data-theme="gold"
        className="flex min-h-screen w-full flex-col justify-center gap-48 border-t-2 border-solid border-gold-light-border bg-gold-light-background px-12 py-8 lg:px-48 dark:border-gold-border dark:bg-gold-background"
      >
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[800px] flex-col items-start gap-3">
            <h2 className="text-4xl font-bold text-gold-light-color dark:text-gold-color">
              Open Source
            </h2>
            <p className="max-w-[800px] text-xl font-medium text-gold-light-accent dark:text-gold-accent">
              gitMyStat! is an open-source project that is free to use and
              contribute to. Built with Next.js and TailwindCSS, with safety of
              Typescript.
            </p>
          </div>
          <picture>
            <source
              srcSet="/repo?username=rahuletto&repo=gitMyStat&theme=gold"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              width={500}
              height={170}
              loading="lazy"
              src="/repo?username=rahuletto&repo=gitMyStat&theme=gold-light"
              alt="(insert Git provider here)"
            />
          </picture>
        </div>
      </section>
    </>
  );
}
