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
      path: '/',
      element: <Home />
    },
    {
      path: '/member',
      element: <Member />
    },
    {
      path: '/members',
      element: <Members />
    },
    {
      path: '/events',
      element: <Events />
    },
    {
      path: '/aboutus',
      element: <AboutUs />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
