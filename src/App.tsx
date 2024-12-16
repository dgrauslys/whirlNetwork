import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { baseUrl } from './constants';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Reviews from './pages/reviews';
import Package from './pages/package';

function App() {

  const router = createBrowserRouter([
    {
      path: `${baseUrl}`,
      element: <Home />
    },
    {
      path: `${baseUrl}/about`,
      element: <About />
    },
    {
      path: `${baseUrl}/services`,
      element: <Services />
    },
    {
      path: `${baseUrl}/reviews`,
      element: <Reviews />
    },
    {
      path: `${baseUrl}/package`,
      element: <Package />
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
