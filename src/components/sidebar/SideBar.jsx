import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './SideBar.css'

const SideBar = () => {
    return (
        <div className="side-bar">
            <nav className="side-bar__nav">
                <ol className="side-bar__ol">

                    <li className="side-bar__item">
                        <a className="side-bar__link" href="/#">
                            <FontAwesomeIcon className='side-bar__icon' icon={faUser} />
                            <span className='side-bar__text'>Моя страница</span>
                        </a>
                        
                    </li>

                    <li className="side-bar__item">
                        <a className="side-bar__link" href="/#">
                            <FontAwesomeIcon className='side-bar__icon'  icon={faUser} />
                            <span className='side-bar__text'>Моя страница</span>
                        </a>
                        
                    </li>

                    <li className="side-bar__item">
                        <a className="side-bar__link" href="/#">
                            <FontAwesomeIcon className='side-bar__icon' icon={faUser} />
                            <span className='side-bar__text'>Моя страница</span>
                        </a>
                        
                    </li>

                </ol>
            </nav>  
        </div>
    )
}

export default SideBar