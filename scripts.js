let projectIndex = 0;
let solutionIndex = 0;

const projects = document.querySelectorAll('.projects-wrapper .project');
const solutions = document.querySelectorAll('.solutions-wrapper .solution');

function updateVisibility(items, index) {
    items.forEach((item, i) => {
        item.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
    });
}

function nextProject() {
    projectIndex = (projectIndex + 1) % (projects.length - 2);
    updateVisibility(projects, projectIndex);
}

function prevProject() {
    projectIndex = (projectIndex - 1 + projects.length) % (projects.length - 2);
    updateVisibility(projects, projectIndex);
}

function nextSolution() {
    solutionIndex = (solutionIndex + 1) % (solutions.length - 2);
    updateVisibility(solutions, solutionIndex);
}

function prevSolution() {
    solutionIndex = (solutionIndex - 1 + solutions.length) % (solutions.length - 2);
    updateVisibility(solutions, solutionIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    updateVisibility(projects, projectIndex);
    updateVisibility(solutions, solutionIndex);
});
