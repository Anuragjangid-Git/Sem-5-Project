
import {signInWithEmailAndPassword, createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup, signOut} from 'firebase/auth'
import { auth } from './FirebaseConfig';

export const LoginApi= (email, password)=> {
    try{
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
   return err;
    }
    
}; 
export const RegisterApi= (email, password)=> {
    try{
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
   return err;
    }
    
}; 
export const GoogleSignInApi= (email, password)=> {
    try{
       let googleProvider = new GoogleAuthProvider();
      let res =  signInWithPopup(auth, googleProvider)
      return res;
    }
    catch(err){
   return err;
    }
}; 

export const LogOut = ()=>{
    try{
   signOut(auth);
    }
    catch(err){
        return err;
         }
}