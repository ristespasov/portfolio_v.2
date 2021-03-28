import project_1 from './images/1.png'
import project_2 from './images/2.png'
import project_3 from './images/3.png'
import project_4 from './images/4.png'

const projectsData = {
    section_title: "Projects.section_title",
    projects: [{
        title: "Freefor",
        description: "Projects.4",
        stack: "MERN stack, Material UI",
        image: project_4,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: '',
        live: 'https://app.freefor.ch/'
    },
    {
        title: "Language school",
        description: "Projects.3",
        stack: "MERN stack, Material UI",
        image: project_3,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: '',
        live: 'https://app.freefor.ch/'
    },
    {
        title: "Covid-19 tracker",
        description: "Projects.2",
        stack: "React, Material UI",
        image: project_2,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: 'https://github.com/ristespasov/COVID19-tracker',
        live: 'https://covid-19-tracker-2020project.netlify.app/'
    },
    {
        title: "Weathery",
        description: "Projects.1",
        stack: "React, CSS",
        image: project_1,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: 'https://github.com/ristespasov/Weathery',
        live: 'https://weathery-19project.netlify.app/'
    }]
}

export default projectsData