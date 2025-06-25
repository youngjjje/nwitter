import {HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Navigation from "./Navigation";


const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Routes>
                { isLoggedIn ? (
                    <>
                        <Route exact path="/" element={<div style={{maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center",}} >
                            <Home userObj={userObj} /> </div> } />
                        <Route exact path="/profile" element={<div style={{maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center",}} >
                            <Profile userObj={userObj} refreshUser={refreshUser}/> </div> } />
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