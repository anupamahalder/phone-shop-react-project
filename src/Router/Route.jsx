import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Login/Login";

//The createBrowserRouter function takes array of object
const myCreatedRoute = createBrowserRouter([
    //Each object mainly takes two things path and element
    {
        path: "/",//default path is home path
        // MainLayout is our parent element which will be fixed for each child element 
        element: <div>
            <MainLayout></MainLayout>
            {/* To see the children  */}
            {/* <Outlet></Outlet> */}
        </div>,
        //Children will also take array of object as Outlet
        children: [
            {
                path: "/",
                element: <Home></Home>,
                //fetching data
                loader: () => fetch('./phones_data.json')
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]) 


export default myCreatedRoute;