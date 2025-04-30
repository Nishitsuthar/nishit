import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '~/components/Layout';
import Home from '~/pages/Home';
import About from '~/pages/About';
import Gallery from '~/pages/Gallery';
import Contact from '~/pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
} 