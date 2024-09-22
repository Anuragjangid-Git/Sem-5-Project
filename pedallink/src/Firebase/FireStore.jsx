
import { addDoc,collection,Firestore,onSnapshot} from "firebase/firestore";
import { firestore } from "./FirebaseConfig";



let userRef = collection(firestore,"Users")
let rideRef = collection(firestore,"Rides")
export const  postUserData = (object) =>{
    addDoc(userRef,object).then(()=>{})
    .catch((err)=>{
    console.log(err);
    });
    
    } ;

    export const getCurrentUser = (setCurrentUser)=>{
        onSnapshot(userRef, (res)=>{
          setCurrentUser(res.docs.map((docs)=>{
              return {...docs.data(),userId: docs.id}
          }).filter((item)=>{
            return item.email === localStorage.getItem("UserEmail");
          })[0]
        );
        });
      
      }

      export const bookride = (rideData)=>{
        addDoc(rideRef,rideData).then(()=>{
          console.log("Document posted")
        }).catch((err) =>{
          console.log(err);
        })
      }