import {useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // eslint-disable-line no-unused-vars
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(user)
      setUserObj(user)
    } else {
      setIsLoggedIn(false)
    }
  setInit(true)
  });
  }, [])
  return (
    <>
    {init ? (
      <AppRouter isLoggedIn = {isLoggedIn} userObj={userObj}/>
    ) : (
      "initializing..."
    )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App;

// https://nwitter-3ba0e.firebaseapp.com/__/auth/handler