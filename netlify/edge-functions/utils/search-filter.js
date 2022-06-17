export default function filterProjectsByQuery({ projects, query }) {
  return projects.filter((project) => {
    const lowercaseTitle = project.title.toLowerCase();
    const titleIncludes = lowercaseTitle.indexOf(query) !== -1;

    const lowercaseContent = project.content.toLowerCase();
    const contentIncludes = lowercaseContent.indexOf(query) !== -1;

    return titleIncludes || contentIncludes;
  });
}
