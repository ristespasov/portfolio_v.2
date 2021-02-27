import project_1 from './images/project_1.jpg'
import project_2 from './images/project_2.jpg'

const projectsData = {
    section_title: "Projects",
    projects: [{
        title: "Project 1",
        description: "This is my first project mockup for my new portfolio version.",
        stack: "React, CSS",
        image: project_1,
        btn_live: "See live",
        btn_source: "Source code"
    },
    {
        title: "Project 2",
        description: "This is my second project mockup for my new portfolio version.",
        stack: "Gatsby, Sass CSS",
        image: project_2,
        btn_live: "See live",
        btn_source: "Source code"
    }]
}

export default projectsData