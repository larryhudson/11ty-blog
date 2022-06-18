import { EleventyEdge } from "https://cdn.11ty.dev/edge@1.0.1/eleventy-edge.js";
import precompiledAppData from "./_generated/eleventy-edge-app-data.js";
import filterProjectsByQuery from "./utils/search-filter.js";

export default async (request, context) => {
  try {
    let edge = new EleventyEdge("edge", {
      request,
      context,
      precompiled: precompiledAppData,

      // default is [], add more keys to opt-in e.g. ["appearance", "username"]
      cookies: [],
    });

    edge.config((eleventyConfig) => {
      // Add some custom Edge-specific configuration
      eleventyConfig.addGlobalData("searchResults", async () => {
        const searchQuery = new URL(request.url).searchParams.get("search");
        if (!searchQuery) return [];

        const requestOrigin = new URL(request.url).origin;
        const searchParams = new URLSearchParams({
          query: searchQuery,
        });
        const searchUrl =
          requestOrigin + "/search-data.json?" + searchParams.toString();

        const searchResults = await fetch(searchUrl).then((r) => r.json());

        return searchResults;
      });
      // eleventyConfig.addFilter("json", obj => JSON.stringify(obj, null, 2));
    });

    return await edge.handleResponse();
  } catch (e) {
    console.log("ERROR", { e });
    return context.next(e);
  }
};
