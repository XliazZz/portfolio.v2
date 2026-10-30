import { defineMiddleware } from "astro:middleware";

// Runs at build time: /en/ is rendered from the Spanish markup, then every
// data-en / data-en-<attr> replaces the Spanish text or attribute next to it.
export const onRequest = defineMiddleware(async ({ url }, next) => {
  const response = await next();
  if (!url.pathname.startsWith("/en")) return response;
  return new Response(toEnglish(await response.text()), response);
});

export function toEnglish(html: string) {
  let swapped = 0;
  const out = html
    .replace(
      /(<([a-z][\w-]*)\b[^>]*?\sdata-en="([^"]*)"[^>]*>)[^<]*(<\/\2>)/g,
      (_, open, _tag, en, close) => {
        swapped++;
        return open + en + close;
      },
    )
    .replace(/<[a-z][^>]*\sdata-en-[a-z-]+="[^"]*"[^>]*>/g, (tag) => {
      for (const [, attr, en] of tag.matchAll(
        /\sdata-en-([a-z-]+)="([^"]*)"/g,
      )) {
        const target = new RegExp(`(\\s${attr}=")[^"]*"`);
        if (!target.test(tag))
          throw new Error(
            `toEnglish: data-en-${attr} without ${attr} in ${tag}`,
          );
        tag = tag.replace(target, (_, start) => `${start}${en}"`);
      }
      return tag;
    });
  // Only text-only elements can be swapped; one with child tags would silently stay in Spanish.
  const expected = html.match(/\sdata-en="/g)?.length ?? 0;
  if (swapped !== expected)
    throw new Error(
      `toEnglish: swapped ${swapped} of ${expected} data-en texts`,
    );
  return out;
}
