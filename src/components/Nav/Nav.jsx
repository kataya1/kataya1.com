import './Nav.css'
import { AnchorLink } from './AnchorLink'
export const Nav = ({ slides }) => {

    return <div className='Nav'>
        {slides.map((elm) => <AnchorLink id={elm.id} key={elm.id} />)}
    </div>
}