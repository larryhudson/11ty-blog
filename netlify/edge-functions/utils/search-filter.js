export default function filterProjectsByQuery({ projects, query }) {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter((project) => {
    const lowercaseTitle = project.title.toLowerCase();
    const titleIncludes = lowercaseTitle.indexOf(lowercaseQuery) !== -1;

    const lowercaseContent = project.content.toLowerCase();
    const contentIncludes = lowercaseContent.indexOf(lowercaseQuery) !== -1;

    return titleIncludes || contentIncludes;
  });
}
