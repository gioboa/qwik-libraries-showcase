/* eslint-disable qwik/jsx-img */
import { GitHubIcon } from "./Icons/GitHubIcon";
import { QwikIcon } from "./Icons/QwikIcon";

export const Header = () => {
  return (
    <header
      class={`fixed top-0 z-10 h-20 w-full border-b-[2px] border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900`}
    >
      <div class="grid h-full grid-cols-12 px-6">
        <div class="col-span-4 flex items-center">
          <a
            href="https://qwik.builder.io"
            title="Qwik logo"
            aria-label="Qwik logo"
            class="items-center pt-2"
          >
            <QwikIcon />
          </a>
        </div>
        <div class="col-span-4 flex items-center justify-center pt-2">
          <a
            href="/"
            class="ml-2 text-2xl font-bold text-black dark:text-white"
          >
            Qwik libraries showcase
          </a>
        </div>
        <div class="col-span-4 flex items-center justify-end">
          <a
            target="_blank"
            href="https://github.com/gioboa/qwik-libraries-showcase"
            title="gioboa/qwik-libraries-showcase"
            aria-label="gioboa/qwik-libraries-showcase"
            rel="noopener noreferrer"
            class="block"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  );
};
