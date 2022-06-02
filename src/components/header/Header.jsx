import './Header.css'
import Logo from '../UI/logo/Logo'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
const Header = () => {

    // const headerItems = [
    //     {class: 'header__nav-item header__nav-item-logo', component: Logo},
    //     {class: 'header__nav-item header__nav-item-search', component: MyInput}

    // ]
    
    return (
        <div className="header-wrapper">
            <div className="container">
                <header className="header">
                    <ul className='header__nav'>
                        <li className='header__nav-item'>
                            <Logo/>
                        </li>
                        {/* <li className='header__nav-item header__nav-item-search'>
                            <MyInput type='text' placeholder="Поиск"/>
                        </li> */}
                        <li className='header__nav-item'>
                            <MyButton>Выйти</MyButton>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Header