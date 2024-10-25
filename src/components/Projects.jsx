import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { projects } from "../constants";

const ProjectCard = (props) => {
    const {
        projectTitle,
        projectDescription,
        imgUrl,
        imgAlt,
        techStack,
        githubLink,
        liveLink,
        reverse,
    } = props;

    const redirectToLink = (link) => {
        window.open(link);
    };

    return (
        <div
            className={`flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col max-w-[60rem] m-[0_auto]`}
        >
            <div
                className={`flex-1 bg-expCardBg2 p-[2.75rem] ${reverse ? "md:rounded-[0_12px_12px_0]" : "md:rounded-[12px_0_0_12px]"} rounded-[12px_12px_0_0]`}
            >
                <div className="flex justify-center items-center h-full w-full">
                    <img
                        alt={`${imgAlt}`}
                        className="rounded-xl"
                        height={800}
                        src={imgUrl}
                        width={800}
                    />
                </div>
            </div>
            <div
                className={`grid gap-5 flex-1 bg-expCardBg p-[2.75rem] ${reverse ? "md:rounded-[12px_0_0_12px]" : "md:rounded-[0_12px_12px_0]"} rounded-[0_0_12px_12px]`}
            >
                <h3 className="text-2xl text-titleColor font-oswald">{projectTitle}</h3>
                <p className="text-subtitleColor font-poppins">{projectDescription}</p>
                <div className="flex gap-x-5 gap-y-3 flex-wrap">
                    {techStack.map((tech, index) => (
                        <div key={tech + index} className="flex justify-center items-center bg-tagBg text-subtitleColor rounded-xl px-6 py-1 text-sm">
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 text-subtitleColor">
                    {liveLink && (
                        <button onClick={() => redirectToLink(liveLink)}>
                            <FaArrowUpRightFromSquare aria-label="Project live link" size={22} />
                        </button>
                    )}
                    {githubLink && (
                        <button onClick={() => redirectToLink(githubLink)}>
                            <IoLogoGithub aria-label="Project GitHub link" size={22} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id='projects' className="py-10 md:px-10 px-5 bg-primaryColor">
            <h2 className="text-center text-4xl text-primaryText font-oswald">Projects</h2>
            <div className="grid gap-10 mt-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        githubLink={project.source_code}
                        imgUrl={project.img}
                        liveLink={project.url}
                        projectDescription={project.content}
                        projectTitle={project.name}
                        reverse={index % 2 == 0}
                        techStack={project.tech}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
