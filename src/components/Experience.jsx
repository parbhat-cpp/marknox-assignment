import { experiences } from "../constants"

const ExperienceCard = (props) => {
  const { imgUrl, alt, jobTitle, jobDescription, employmentSpan } = props;

  return (
    <div className="flex sm:flex-row flex-col justify-between p-[1.25rem] bg-expCardBg rounded-xl max-w-[45rem] mx-auto drop-shadow-lg">
      <div className="flex-1 flex items-center justify-center">
        <img alt={alt} height={230} src={imgUrl} width={230} />
      </div>
      <div className="flex-1 sm:m-0 m-[25px_0_0_0] font-poppins">
        <h3 className="text-xl text-titleColor font-oswald">{jobTitle}</h3>
        <p className="text-subtitleColor m-[10px_0_0_0]">{jobDescription}</p>
        <div className="flex-1 text-subtitleColor text-sm m-[20px_0_0_0]">
          {employmentSpan}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-primaryColor py-10 md:px-10 px-5">
      <h2 className="text-center text-4xl text-primaryText font-oswald">Experience</h2>
      <div className="flex flex-col gap-5 justify-center m-[2rem_0_0_0]">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.jobTitle}
            alt={experience.alt}
            employmentSpan={experience.employmentSpan}
            imgUrl={experience.imgUrl}
            jobDescription={experience.jobDescription}
            jobTitle={experience.jobTitle}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
