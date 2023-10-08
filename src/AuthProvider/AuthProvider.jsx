import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
// create context 
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

//adding proptypes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;