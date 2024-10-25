import { socials } from "../constants"

const Socials = () => {
    return (
        <div className="flex gap-3 items-center">
            {
                socials.map((social) => (
                    <a key={social.name} href={social.link} aria-label={social.label} target="_blank">
                        <social.icon />
                    </a>
                ))
            }
        </div>
    )
}

export default Socials
