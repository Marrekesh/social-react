import {
    Routes,
    Route,
} from "react-router-dom";

import AuthPage from "../pages/authPage/AuthPage";
import MainPage from "../pages/mainPage/MainPage";


const useRoutes = () => {
    return (
        
        <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
        

    )
}

export default useRoutes