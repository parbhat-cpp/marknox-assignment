import { IoMdCreate } from "react-icons/io";
import Socials from "./Socials"

const Footer = () => {
    return (
        <>
            <div className="h-[1px] bg-secondaryText">

            </div>
            <footer className="flex md:flex-row flex-col md:justify-between items-center gap-3 py-12 px-16 bg-primaryColor">
                <Socials />
                <div className="flex items-center gap-2 text-primaryText">
                    <IoMdCreate size={20} />
                    <p>Created by Parbhat Sharma</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
