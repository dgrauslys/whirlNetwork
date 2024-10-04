import Home from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Members from './pages/members';
import './index.css';
import Member from './pages/member';
import Events from './pages/events';
import AboutUs from './pages/aboutUs';
import { baseUrl } from './constants';
import { Nanum } from './components/constants';

function App() {

  const router = createBrowserRouter([
    {
      path: `${baseUrl}`,
      element: <Home />
    },
    {
      path: `${baseUrl}member/:id`,
      element: <Member />
    },
    {
      path: `${baseUrl}members`,
      element: <Members />
    },
    {
      path: `${baseUrl}events`,
      element: <Events />
    },
    {
      path: `${baseUrl}aboutus`,
      element: <AboutUs />
    }
  ]);

  return (
    <>
        <Nanum/>
        <RouterProvider router={router} />

    </>
  )
}

export default App
