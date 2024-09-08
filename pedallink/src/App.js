
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register&login/Register";
import HomePage from "./pages/home/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Protected } from "./pages/Protected";
import { auth } from "./Firebase/FirebaseConfig";
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
      return <h1>loading.....</h1>;
     }
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/register" element={<Register user={user} />}></Route> 
        <Route path="/home" element={<Protected user={user}><HomePage/></Protected>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
