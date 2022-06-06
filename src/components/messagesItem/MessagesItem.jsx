import { Link } from 'react-router-dom'

import mi from './messageItem.module.css'
const MessagesItem = ({id, src, name}) => {
    return (
        <Link to={`/message/${id}`} className={mi.messagesLink}>
            <img className={mi.messagesImg} src={src} alt="avatar" />
            <span className={mi.messagesName}>{name}</span>
        </Link>
    )
}

export default MessagesItem