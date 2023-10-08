import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
// create context 
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // declare a state to hold user info 
    const [user, setUser] = useState(null);

    //who will call createUser has to pass two parameters
    const createUser = (email,password) =>{
        // this function requires three parameter 
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    //share user info with other component
    const AuthInfo = {
        user,
        createUser,
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