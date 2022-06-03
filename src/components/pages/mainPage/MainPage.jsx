import Header from "../../header/Header"
import SideBar from "../../sidebar/SideBar"
import MyProfile from "../../MyProfile/MyProfile"

import './MainPage.css'
const MainPage = () => {


    return (
        <div className="main-page-wrapper">
            <Header/>
            <div className="container">
                <div className="content-wrapper">
                    <SideBar/>
                    <main className="main">
                        <MyProfile/>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default MainPage