import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const location = useLocation();
    // if user not null then allow to go inside so first we need user info 
    const {user,loading} = useContext(AuthContext);
    // if loading state is true then return a spinner 
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>;
    }
    if(user){
        // if user is valid then let the user to go children of private route 
        return children;
    }
    // if user is not valid then navigate to login page 
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
// adding proptypes 
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;