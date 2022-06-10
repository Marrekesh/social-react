import TextArea from "../UI/textArea/TextArea"
import MyButton from "../UI/button/MyButton"
import { 
    addPostAction, 
    savePostTextAction, 
    clearPostTextAction 
} from "../../store/posts/postReducer"
import { useDispatch, useSelector } from "react-redux"

import './AddPost.css'
const AddPost = () => {
    const dispatch = useDispatch()
    const title = useSelector(state => state.posts.postText)


    const addText = (text) => {
        dispatch(savePostTextAction(text))  
    }

    const createPost = (e) => {
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            title
        }

        dispatch(addPostAction(newPost))
        dispatch(clearPostTextAction())
    }
    return (
        <div className="add-post-block">
            <form className="add-post-form">
                <TextArea type="text" 
                value={title} 
                onChange={e => addText(e.target.value)} 
                placeholder='Введите текст'
                />
                <div><MyButton className="my-button" onClick={createPost}>Добавить</MyButton></div>  
            </form>

            
            
        </div>
    )
}

export default AddPost