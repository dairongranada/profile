import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

import img1 from '../image/project-1.png'
import img2 from '../image/project-2.png'
import img3 from '../image/project-3.png'


export const Experience = [
    {
        id: 1,
        date: "2022 - present",
        iconsSrc: <IoCodeWorking />,
        title: "Front-End Developer",
        location: "Venezuela",
        name_company: "BmBot Solutions",
        describe: "Development of App, User Experience, Connectivity with SmartContract, Web3",
    },
    {
    id: 2,
        date: "2021 - 2022 finished",
        iconsSrc: <IoCodeWorking />,
        title: "Developer Software",
        location: "Chile",
        name_company: "Visibilitytech",
        describe: "Development of App, User Experience, Visual Design, Project Management",
    },
    {
        id: 3,
            date: "2019 - 2022 finished",
            iconsSrc: <IoCodeWorking />,
            title: "Control and Logistics Coordinator",
            location: "Chile",
            name_company: "TechSolutions",
            describe: "General coordinator of all technicians, User Experience, Front-End, Project Lead",
        }
    ]

export const Projects = [
    {
        id: 1,
        name: "Style Tatto",
        imageSrc: img1,
        techs: "Python (Django),  React, Sass",
        github: "https://github.com/dairongranada/RazersGaming-",
        web: "https://github.com/dairongranada/FrontEnd-Styletattoo"
    },
    {
        id: 2,
        name: "Razers Gaming",
        imageSrc: img2,
        techs: "React, Css, ",
        github: "https://github.com/dairongranada/RazersGaming-",
        web: "https://github.com/dairongranada/FrontEnd-Styletattoo"
    },
    {
        id: 3,
        name: "Blog (Proximamente)",
        imageSrc: img3,
        techs: "... ... ...",
    },
]



export const SocialLinks = [
    {
        id: '1',
        name: 'Instagram',
        iconsSrc: <IoLogoInstagram className="text-instagram text-3xl cursor-pointer" />,
        link: 'https://instagram.com/dairongranadaa'
    },
    {
        id: '2',
        name: 'Github',
        iconsSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
        link: 'https://github.com/dairongranada'
    },
    {
        id: '3',
        name: 'LinkedId',
        iconsSrc: <IoLogoLinkedin className="text-linkeId text-3xl cursor-pointer" />,
        link: 'https://www.linkedin.com/in/dairon-granada-2a1551249/'
    },
    {
        id: '4',
        name: 'Whatsapp',
        iconsSrc: <IoLogoWhatsapp className="text-whatssap text-3xl cursor-pointer" />,
        link: 'https://wa.me/573218666262'
    },
]