import Layout from "../Layout/Layout";

import Home from "../Pages/Home";


export const routes = [
    {
        id: 1,
        path:"/",
        element:<Layout component={<Home/>}/>
    },
   
]