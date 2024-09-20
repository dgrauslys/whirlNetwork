import Home from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Members from './pages/members';
import './index.css';
import Member from './pages/member';
import Events from './pages/events';
import AboutUs from './pages/aboutUs';

function App() {

  const router = createBrowserRouter([
    {
      path: '/whirlNetwork/',
      element: <Home />
    },
    {
      path: '/whirlNetwork/member/:id',
      element: <Member />
    },
    {
      path: '/whirlNetwork/members',
      element: <Members />
    },
    {
      path: '/whirlNetwork/events',
      element: <Events />
    },
    {
      path: '/whirlNetwork/aboutus',
      element: <AboutUs />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
