import { Intro } from './Intro/Intro'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Awards from './Awards/Awards'
import Certs from './Certs/Certs'
const pages = [
    {
        id: 'Intro',
        content: <Intro></Intro>,

    },
    {
        id: 'Projects',
        content: <Projects></Projects>
    },
    {
        id: 'Experience',
        content: <Experience></Experience>
    },
    {
        id: 'Certs',
        content: <Certs></Certs>
    },
    {
        id: 'Awards',
        content: <Awards></Awards>
    },
]

export default pages