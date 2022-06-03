import './Post.css'
import MyButton from "../UI/button/MyButton"

const Post = () => {
    return (
        <div className="post">
            <div className='post__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut commodi saepe nemo similique natus cum non tempora, sit excepturi explicabo! Non magni at facere necessitatibus, recusandae ea tenetur ratione praesentium.</div>
            <MyButton>Удалить</MyButton>
        </div>
    )
}

export default Post