import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// create context 
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // declare a state to hold user info 
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        // this function requires two parameter which will come whoever call createUser function 
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //for login
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }
    
    //set an observer 
    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("Current Value of the current user ",currentUser);
        })
        
        return () =>{
            unSubscribe();
        }
    },[]);

    //for log out/sign out
    const logOutUser = () =>{
        return signOut(auth);
    }
    //share user info with other component
    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logOutUser,
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
