import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,
    updateProfile,
    getIdToken
} from "firebase/auth";


// initializeAuthentication firebase app
initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState("");
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState("");

    // google auth provider
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInWithGoogle=(location,navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {

            const user = result.user;
            saveUser(user.email,user.displayName,"PUT")
            setAuthError("");
            const destination= location?.state?.from ||"/";
           navigate(destination);
            // ...
        }).catch((error) => {

            setAuthError(error.message);
            
        }).finally(() => setIsLoading(false));

        
    }



    const registerUser=(email,password,name,navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
              setAuthError("");
              const newUser={email,displayName:name};
              setUser(newUser);
            //   save user to database
            saveUser(email,name,"POST")
            //   upate user creation
              updateProfile(auth.currentUser, {
                  displayName:name
                 
              }).then(() => {
              }).catch((error) => {
              });

              navigate("/");

            })
            .catch((error) => {
                setAuthError(error.message);
            
            })
            .finally(()=>setIsLoading(false));

    }
    const loginUser =(email,password,location,navigate)=>{
         setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           const destination= location?.state?.from ||"/";
           navigate(destination);
          setAuthError("");
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));

}

    const logOut=()=>{
         setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));

    }
    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        fetch("https://fast-anchorage-62107.herokuapp.com/users", {
            method:method,
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    // useEffect use admin 
    useEffect(()=>{
        fetch(`https://fast-anchorage-62107.herokuapp.com/users/${user.email}`)
        .then(res =>res.json())
        .then(data =>setAdmin(data.admin));
    },[user.email]) 
    // observ user state
    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken =>{
                    setToken(idToken)
                })
            } else {
               setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth])

    return{
        admin,
        user,
        token,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
        signInWithGoogle,
        
    }
}
export default useFirebase;