import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './SideBar.css'

const SideBar = () => {
    return (
        <div className="side-bar">
            <nav className="side-bar__nav">
                <ol className="side-bar__ol">

                    <li className="side-bar__item">
                        <Link to='/' className="side-bar__link" >
                            <FontAwesomeIcon className='side-bar__icon' icon={faUser} />
                            <span className='side-bar__text'>Моя страница</span>
                        </Link>
                        
                    </li>

                    <li className="side-bar__item">
                        <Link to='/message' className="side-bar__link" href="/#">
                            <FontAwesomeIcon className='side-bar__icon'  icon={faMessage} />
                            <span className='side-bar__text'>Сообщения</span>
                        </Link>
                        
                    </li>

                    <li className="side-bar__item">
                        <a className="side-bar__link" href="/#">
                            <FontAwesomeIcon className='side-bar__icon' icon={faNewspaper} />
                            <span className='side-bar__text'>Новости</span>
                        </a>
                        
                    </li>

                </ol>
            </nav>  
        </div>
    )
}

export default SideBar