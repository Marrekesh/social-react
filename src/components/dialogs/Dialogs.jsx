import TextArea from "../UI/textArea/TextArea"
import MyButton from "../UI/button/MyButton"


import d from './dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogWindow}>
                <div className="dialogMessage">sd</div>
                
            </div>
            <div className={d.dialogSend}>
                <TextArea style={{width: '100%'}} placeholder='Введите сообщение'/>
                <div><MyButton>Отправить</MyButton></div>
                
            </div>
        </div>
    )
}

export default Dialogs