import messages from './Messages.module.css'
import Dialogs from '../../dialogs/Dialogs'
import MessagesItem from '../../messagesItem/MessagesItem'
import { useState } from 'react'

const Messages = () => {

    const [names, setNames] = useState([
        {id: 1, name: 'Дима', src: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg'},
        {id: 2, name: 'Оля', src: 'https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg'},
        {id: 3, name: 'Аня', src: 'https://animalsglobe.ru/wp-content/uploads/2013/01/enot.jpg'},
    ])
 
    return (
        <div className={messages.messages}>
            <div className={messages.messagesItem}>
                {names.map(item => 
                     <MessagesItem key={item.id} id={item.id} src={item.src} name={item.name}/>
                )}
            </div>
            {/* <div className={messages.messagesMain}>
                Выберете пользавателя для диалога
            </div> */}
            <Dialogs/>
       

        </div>
    )
}

export default Messages