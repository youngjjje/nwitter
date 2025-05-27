import {useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // eslint-disable-line no-unused-vars
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(user)
    } else {
      setIsLoggedIn(false)
    }
  setInit(true)
  });
  }, [])
  return (
    <>
      <AppRouter isLoggedIn = {isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App;

// https://nwitter-3ba0e.firebaseapp.com/__/auth/handler