
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import AuthPage from "../pages/authPage/AuthPage";
import MyProfile from "../pages/MyProfile/MyProfile";
import Header from "../header/Header"
import SideBar from "../sidebar/SideBar"
import Messages from "../pages/messagesPage/Messages";

import './App.css';

function App() {

	const authenticated = true

	if (authenticated) {
		return (
			<div className="main-page-wrapper">
				<Header/>
				<div className="container">
					<div className="content-wrapper">
						<SideBar/>
						<main className="main">
							<Routes>
								<Route path="/" element={<MyProfile/>}/>
								<Route path="/message" element={<Messages/>}/>
								<Route path="*" element={<MyProfile/>}/>
							</Routes>
						</main>
					</div>
				</div>
        	</div>
        )

	} 

	return (
		<Routes>
			<Route path="/auth" element={<AuthPage/>}/>
			<Route path="/*" element={<AuthPage/>}/>
		</Routes>
	)
	



}

export default App;
