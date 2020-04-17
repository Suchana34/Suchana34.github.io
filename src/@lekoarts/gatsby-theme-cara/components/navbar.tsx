import { Icon } from '@mdi/react';


type navProps = {
    icon: {mdiHome} | {mdiContacts},
    link: string,
    description: string
}

const Navbar = ({icon,link, description}:navProps) => {
    return(
        <div style={{marginLeft: 0}}>

        <a href = {link}><Icon path = {icon} size = {2} color='#667eea'></Icon></a>
        <h3>{description}</h3>

        </div>
    )
}
export default Navbar