import project_1 from './images/1.png'
import project_2 from './images/2.png'
import project_3 from './images/3.png'
import project_4 from './images/4.png'
import project_5 from './images/5.png'

const projectsData = {
    section_title: "Projects.section_title",
    projects: [{
        title: "Freefor",
        description: "Projects.5",
        stack: "MERN stack, Material UI",
        image: project_5,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: '',
        live: 'https://app.freefor.ch/'
    },
    {
        title: "Language school",
        description: "Projects.4",
        stack: "React, Material UI, i18next",
        image: project_4,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: '',
        live: 'https://language-school-rs.netlify.app/'
    },
    {
        title: "Covid-19 tracker",
        description: "Projects.3",
        stack: "React, Material UI",
        image: project_3,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: 'https://github.com/ristespasov/COVID19-tracker',
        live: 'https://covid-19-tracker-2020project.netlify.app/'
    },
    {
        title: "Weathery",
        description: "Projects.2",
        stack: "React, CSS",
        image: project_2,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: 'https://github.com/ristespasov/Weathery',
        live: 'https://weathery-19project.netlify.app/'
    },
    {
        title: "Portfolio v.1",
        description: "Projects.1",
        stack: "jQuery, Bootstap, CSS, HTML, Photoshop",
        image: project_1,
        btn_live: "Projects.live",
        btn_source: "Projects.code",
        code: 'https://github.com/ristespasov/ristespasov.github.io',
        live: 'https://ristespasov.github.io/'
    }]
}

export default projectsData