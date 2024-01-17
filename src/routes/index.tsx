import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "qwik-image";
import { librariesData } from "./libraries.data";

export const useLibraries = routeLoader$(() => {
  return librariesData;
});

export default component$(() => {
  const libraries = useLibraries();
  return (
    <div class="p-10 text-black dark:text-white">
      {libraries.value.map((lib, key) => (
        <div
          key={key}
          class="w-[350px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 pb-2 pt-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="h-20 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
            <Image
              layout="constrained"
              objectFit="cover"
              width="300"
              height="300"
              src={lib.logoSrc}
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
        </div>
      ))}
    </div>
  );
});
