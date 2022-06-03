import TextArea from "../UI/textArea/TextArea"
import MyButton from "../UI/button/MyButton"

import './AddPost.css'
const AddPost = () => {
    return (
        <div className="add-post-block">
            <TextArea placeholder='Введите текст'/>
            <div><MyButton>Добавить</MyButton></div>
            
            
        </div>
    )
}

export default AddPost