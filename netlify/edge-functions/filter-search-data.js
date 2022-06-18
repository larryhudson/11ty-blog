import filterProjectsByQuery from "./utils/search-filter.js";

export default async (request, context) => {
  const searchQuery = new URL(request.url).searchParams.get("query");

  if (!searchQuery || searchQuery === "") return context.json([]);

  const allProjectsResponse = await context.next();
  const allProjects = await allProjectsResponse.json();

  const searchResults = filterProjectsByQuery({
    projects: allProjects,
    query: searchQuery,
  });

  return context.json(searchResults);
};
