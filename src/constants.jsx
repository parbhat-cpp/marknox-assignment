import { IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const resumeLink = 'https://drive.google.com/file/d/1i9ptCAkdwi7LWF9QTsAHZ-Pv0LEF1JF4/view?usp=sharing';

export const socials = [
    {
        name: 'GitHub',
        link: 'https://github.com/parbhat-cpp',
        icon: () => <IoLogoGithub size={25} className="text-primaryText" />,
        label: "Parbhat Sharma's GitHub",
    },
    {
        name: 'Twitter',
        link: 'https://x.com/ParbhatSharma29',
        icon: () => <FaSquareXTwitter size={25} className="text-primaryText" />,
        label: "Parbhat Sharma's Twitter/X",
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/_parbhat.sharma_/',
        icon: () => <IoLogoInstagram size={25} className="text-primaryText" />,
        label: "Parbhat Sharma's Instagram",
    },
    {
        name: 'Portfolio',
        link: 'https://www.parbhatsharma.in/',
        icon: () => <IoIosGlobe size={25} className="text-primaryText" />,
        label: "Parbhat Sharma's Portfolio",
    },
    {
        name: 'Email',
        link: 'mailto:prabhat29ps@gmail.com',
        icon: () => <MdEmail size={25} className="text-primaryText" />,
        label: "Parbhat Sharma's Email",
    }
]

export const experiences = [
    {
        jobTitle: "Frontend Developer Intern",
        jobDescription:
            "Responsible for frontend development at Go Tripping.",
        imgUrl: "src/assets/gotripping_logo.webp",
        employmentSpan: "July 2024 - September 2024",
        alt: "Work Experience | Go Tripping",
    },
    {
        jobTitle: "Full Stack Developer Intern",
        jobDescription:
            "Worked as a full stack developer at RapidoForm. Here I created landing pages, implemented features and also involved in the testing of the website.",
        imgUrl: "src/assets/rapidoform_logo.webp",
        employmentSpan: "Nov 2023 - July 2024",
        alt: "Work Experience | RapidoForm",
    }
];

export const projects = [
    {
        name: "Party Tube",
        source_code: "https://github.com/parbhat-cpp/partytube-app",
        content:
            "An Android app which connects its users across the world and helps them to watch YouTube videos as well as comunicate with each other.",
        img: "https://iili.io/d27t5KJ.png",
        tech: ["Flutter", "Node.js", "Express.js", "Socket.io"],
    },
    {
        name: "Flipkart Clone",
        source_code: "https://github.com/parbhat-cpp/flipkart-clone-mern",
        content:
            "It is a clone of an e commerce website Flipkart and I have tried to make it look as similar as possible. I have used React, Redux, Node.js, MongoDB in this project.",
        url: "https://flipkartclone-mern.onrender.com/",
        img: "https://iili.io/JffYVzF.md.png",
        tech: ["React.js", "MongoDB", "Node.js", "Express.js", "Material UI"],
    },
    {
        name: "Google Clone",
        source_code: "https://github.com/parbhat-cpp/googleclone",
        content:
            "A Google search engine clone which can search and provide a result based on your query. It uses Google custom search engine to get result from the web",
        url: "https://boisterous-sable-4a425d.netlify.app/",
        img: "https://iili.io/JffYEOP.md.png",
        tech: ["React.js", "Material UI"],
    },
];
