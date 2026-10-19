import { HtmlBasePlugin } from "@11ty/eleventy";
import pluginRss from "@11ty/eleventy-plugin-rss";
import site from "./_data/site.json" with { type: "json" };

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.ignores.add("README.md");

  // Rewrites root links like "/style.css" to include the path prefix
  // (e.g. "/story-forager/style.css" on a GitHub Pages project site).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Adds the date filter used by feed.njk.
  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: { output: "_site" },
    // Taken from site.url so there's only one place to set it:
    // "https://you.github.io/story-forager/" -> "/story-forager/"
    pathPrefix: new URL(site.url).pathname,
  };
}
