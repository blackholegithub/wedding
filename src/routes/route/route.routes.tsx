import Path from "../path/path.routes";
import HomePage from "../../pages/home/Home.Pages";
import NotFoundPage from "../../pages/NotFound/NotFound.Pages";
import UserPage from "../../pages/user/User.Pages";

const Router = {
  Home: {
    Element : <HomePage/>,
    Path: Path.Home
   },

  User :  {
    Element : <UserPage />,
    Path: Path.User
   },

   Service :  {
    Element : <UserPage />,
    Path: Path.Service
   },

   NotFound : {
    Element : <NotFoundPage /> ,
    Path: Path.NotFound
   }

}
   


export default Router;