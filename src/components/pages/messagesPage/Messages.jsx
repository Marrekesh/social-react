import messages from './Messages.module.css'

import { Link } from 'react-router-dom'
const Messages = () => {
    return (
        <div className={messages.messages}>
            <div className={messages.messagesItem}>
                <Link to='/message/1' className={messages.messagesLink}>
                    <img className={messages.messagesImg} src="https://ichef.bbci.co.uk/news/640/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg" alt="avatar" />
                    <span className={messages.messagesName}>Дима</span>
                </Link>
                <Link to='/message/1' className={messages.messagesLink}>
                    <img className={messages.messagesImg} src="https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg" alt="avatar" />
                    <span className={messages.messagesName}>Аня</span>
                </Link>
            </div>
            <div className={messages.messagesMain}>
                Выберете пользавателя для диалога
            </div>
       

        </div>
    )
}

export default Messages