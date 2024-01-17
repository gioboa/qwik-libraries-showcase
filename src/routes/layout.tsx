import { $, Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import type { ImageTransformerProps } from "qwik-image";
import { useImageProvider } from "qwik-image";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      return `${src}?w=${width}&h=${height}&format=webp`;
    },
  );

  useImageProvider({
    resolutions: [640],
    imageTransformer$,
  });

  return (
    <div>
      <Header />
      <main class="flex h-screen bg-white pt-20 dark:bg-slate-900">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
