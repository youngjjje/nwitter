import {HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                { isLoggedIn ? (
                    <>
                        <Route exact path="/" element= {<Home />} />
                        <Route exact path="/profile" element={<Profile />} />
                    </>
                ) : (
                    <>
                        <Route exact path="/" element={<Auth />}/>
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;