import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "qwik-image";
import { librariesData } from "./libraries.data";

export const useLibraries = routeLoader$(() => {
  return librariesData.sort(() => (Math.random() > 0.5 ? -1 : 1));
});

export default component$(() => {
  const libraries = useLibraries();
  return (
    <>
      <h1 class="mt-10 w-full text-center text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">
        Libraries
      </h1>
      <div class="flex flex-wrap justify-evenly gap-3 p-10 text-black dark:text-white">
        {libraries.value.map((lib, key) => (
          <div
            key={key}
            class="h-[300px] w-[300px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 pb-2 pt-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <a href={lib.href} aria-label={lib.name} target="_blank">
              <div class="flex h-[120px] w-full items-center justify-center rounded-t-lg">
                <Image
                  layout="constrained"
                  objectFit="cover"
                  width="120"
                  height="120"
                  src={lib.logo}
                  alt={lib.name}
                  placeholder={"background: 'rgba(37,99,235,1)';"}
                />
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {lib.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {lib.description}
                </p>
              </div>
            </a>
          </div>
        ))}
        <div class="h-[300px] w-[300px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 pb-2 pt-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div class="flex h-[120px] w-full items-center justify-center rounded-t-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#888888"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8z"
              />
            </svg>
          </div>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Add you library
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You can change{" "}
              <a
                class="text-blue-700"
                href="https://github.com/gioboa/qwik-libraries-showcase/blob/main/src/routes/libraries.data.ts"
              >
                this
              </a>{" "}
              file and submit a PR.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
