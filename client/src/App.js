import './App.scss';
import {
  createBrowserRouter,
  Outlet,

  RouterProvider,
} from "react-router-dom";
import Add from './pages/Add';
import Single from './pages/Single';
import Home from './pages/Home';
import Nav from './utils/Nav';
import Footer from './utils/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Popup from './utils/Popup';
import Feed from './pages/Feed';
function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Popup/>
      <Footer />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop/:cat",
        element:<Feed/>
      },
      {
        path:"/item/:id",
        element:<Single/>
      },
      {
        path:"/write/:cat/:id",
        element:<Add/>
      }
      , {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]
  }
 
 

]);
function App() {

  return (
    <div className="App">
      <div className="container">

         <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
