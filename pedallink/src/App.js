
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register&login/Register";
import HomePage from "./pages/home/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Protected } from "./pages/Protected";
import { auth } from "./Firebase/FirebaseConfig";
import Loader from "./components/common/loader/Loader";
import Profile from "./pages/profile/Profile";
function App() {
  const [user,setUser] = useState(null);
  const   [isFetching,setIsFetching] = useState(true);
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (user)=>{
      if(user){
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    }) ;
    return ()=> unSubscribe();

  },[])
     if (isFetching){
      return <Loader/>;
     }
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Register user={user} />}></Route> 
        <Route path="/home" element={<Protected user={user}><HomePage/></Protected>}></Route>
        <Route path="/profile" element={<Protected user={user}><Profile/></Protected>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
