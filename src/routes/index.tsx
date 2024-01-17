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
      <h1 class="mt-6 w-full text-center text-[46px] font-bold tracking-tight text-gray-900 dark:text-white">
        Libraries
      </h1>
      <div class="flex flex-wrap gap-3 p-10 text-black dark:text-white">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {lib.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {lib.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
});
