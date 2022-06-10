import './MyButton.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default MyButton