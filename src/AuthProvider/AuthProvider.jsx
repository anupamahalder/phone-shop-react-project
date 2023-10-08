import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
    
    


    //share user info with other component
    const AuthInfo = {
        user,
        createUser,
        signInUser,
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