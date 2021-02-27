import project_1 from './images/1.png'
import project_2 from './images/2.png'
import project_3 from './images/3.png'

const projectsData = {
    section_title: "Projects",
    projects: [{
        title: "Freefor",
        description: "Web platform with a wide range of sports and recreational offers. It is developed as a company team project on which I was working as a frontend developer.",
        stack: "MERN stack, Material UI",
        image: project_3,
        btn_live: "See live",
        btn_source: "Source code",
        github: '',
        live: 'https://app.freefor.ch/'
    },
    {
        title: "Covid-19 tracker",
        description: "A responsive web app that provides data of total infected, recovered, active, and death cases from Coronavirus globally and by country. The data is presented with numbers, charts, and a map.",
        stack: "React, Material UI",
        image: project_2,
        btn_live: "See live",
        btn_source: "Source code",
        github: 'https://github.com/ristespasov/Weathery',
        live: 'https://weathery-19project.netlify.app/'
    },
    {
        title: "Weathery",
        description: "Weathery provides data for current weather conditions, forecast and air quality index. Contains an auto location finder and allows a custom search.",
        stack: "React, CSS",
        image: project_1,
        btn_live: "See live",
        btn_source: "Source code",
        github: 'https://github.com/ristespasov/COVID19-tracker',
        live: 'https://covid-19-tracker-2020project.netlify.app/'
    }]
}

export default projectsData