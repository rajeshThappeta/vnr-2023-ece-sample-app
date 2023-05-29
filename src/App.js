import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login'

function App() {


  //create browser router obj
  const browserRouter=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        }
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
