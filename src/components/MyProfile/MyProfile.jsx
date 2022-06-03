import './MyProfile.css'
import AddPost from '../addPosts/AddPost'
import Posts from '../posts/Posts'
const MyProfile = () => {
    return (
        <div className="my-profile">
            <div className="my-profile__block-img">
                <img className="my-profile__img" src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="react" />
            </div>

            <div className='my-profile__info-block'>
                <img className='my-profile__img' src="https://sun9-82.userapi.com/s/v1/if1/FN64PxKarvTpcyJREDwwPprzikfCCucpmbkFnPgE-tZ5uv_9X5H8vMr1o2Xc8UkU0EXOXNuE.jpg?size=810x1080&quality=96&type=album" alt="avatar"/>
                <div className='my-profile__text-block'>
                    <span className='my-profile__text-name'>Дмитрий</span>
                    <span className='my-profile__text-info'>Лондон</span>
                    <span className='my-profile__text-info'>12 сентября 1994</span>
                </div>
                
            </div>
            <h3 style={{marginBottom: '10px'}}>Мои посты</h3>
            <AddPost/>
            <Posts/>

        </div>
    )
}

export default MyProfile

