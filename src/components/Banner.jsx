import { IoMdDownload } from "react-icons/io";

import banner_person from '../assets/banner_person.png'
import banner_doodles from '../assets/banner_doodles.png'
import Socials from './Socials'
import { resumeLink } from "../constants";

const Banner = () => {
    return (
        <div className="h-[calc(100vh-93px)] bg-primaryColor font-poppins flex md:flex-row flex-col justify-center">
            <div className='md:basis-1/2 basis-1 flex justify-center items-center m-6'>
                <div className='grid gap-3'>
                    <h1 className='text-primaryText sm:text-5xl text-4xl font-bold'>Parbhat Sharma</h1>
                    <h2 className='text-secondaryText sm:text-4xl text-3xl font-semibold'>Full Stack Developer</h2>
                    <Socials />
                    <a href={resumeLink} target="_blank" className='flex items-center gap-2 bg-secondaryColor py-3 px-5 rounded-md text-primaryText font-semibold w-min'>
                        <p className="w-max">
                            Download CV
                        </p>
                        <IoMdDownload aria-label="Download/View CV" size={20} />
                    </a>
                </div>
            </div>
            <div className="relative md:basis-1/2 md:flex hidden justify-center items-center">
                <img className='absolute bottom-0 z-10' height={400} width={400} src={banner_person} alt='Parbhat Portfolio banner image' />
                <img className='absolute z-0' height={450} width={450} src={banner_doodles} alt='Language doodles' />
            </div>
        </div>
    )
}

export default Banner
