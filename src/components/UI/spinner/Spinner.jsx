import classes from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={`${classes.spinner}  ${classes.circles}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default Spinner