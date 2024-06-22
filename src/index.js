import reactDOM from "react-dom/client"
import Home from "./views/Home/Home"
import Blog from "./views/Blog/Blog"
import BlogView from "./views/BlogView/BlogView";




import{
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

const root = reactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path : "/",
        element:<Home/>
    },
   
     {
        path : "/Blog",
        element:<Blog/>
    },

    {
        path : "/BlogView/:id",
        element :  <BlogView/>
    }


])

root.render(
<>
<RouterProvider router={router}/>
</>
)