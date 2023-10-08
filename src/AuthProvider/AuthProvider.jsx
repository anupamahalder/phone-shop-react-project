import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// create context 
export const AuthContext = createContext(null);

//create google provider 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // declare a state initial value is true
    const [loading, setLoading] = useState(true);
    // declare a state to hold user info 
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        // this function requires two parameter which will come whoever call createUser function 
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //for login
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }
    //sign in with google with no parameter
    const signInWithGoogle = () =>{
        // we will call sign in with popup which will take two parameters 
        return signInWithPopup(auth, googleProvider);
    }
    //set an observer 
    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // loading will be false when we will set user to the state 
            setLoading(false);
            setUser(currentUser);
            // console.log("Current Value of the current user ",currentUser);
        })
        
        return () =>{
            unSubscribe();
        }
    },[]);

    //for log out/sign out
    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    //share user info with other component
    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logOutUser,
        loading,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

//adding proptypes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;

// useEffect(()=>{
//     // if state changed then it will take auth and a callback function and put it into a variable
//     // unSubscribe takes an reference and get a callback function by which we can detached relation 
//     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
//         // set user to state if user not there then it will become null 
//         setUser(currentUser);
//         console.log('observing current user inside useEffect of Authprovider ',currentUser);
//     })

//     // return with an arrow function by calling unSubscribe function 
//     return () =>{
//         unSubscribe();
//     }
// },[]);
