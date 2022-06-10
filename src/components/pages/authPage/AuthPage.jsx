import classes from './AuthPage.module.css'
import Header from '../../header/Header'
import MyButton from '../../UI/button/MyButton'
import MyInput from '../../UI/input/MyInput'

const AuthPage = () => {
    return (
        <div className={classes.meinAuth}>
           <h1 className={classes.title}>Welcome to DD</h1>
           <form>
                <MyInput placeholder="Login"/>
                <MyInput placeholder="Password"/>
                <MyButton className="my-button width">Log in</MyButton>
                <MyButton className="my-button width white">Sign up</MyButton>
           </form>
        </div>
    )
}

export default AuthPage