const project = {
    id: 1,
    title: "Build Website",
    details: {
      status: "ongoing",
      milestones: ["Design", "Code"]
    }
  };
// const newProject = JSON.parse(JSON.stringify(project));
const newProject = structuredClone(project);
  
newProject.details.status = "completed";
console.log(newProject.details.status);
console.log(project.details.status);