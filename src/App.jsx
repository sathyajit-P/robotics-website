import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: (
      <>
        <Navbar />
        <HeroSection/>
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: '/blog',
    element: (
      <>
        <Navbar/>
        <Blog/>
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <Navbar />
        <Services/>
      </>
    ),
  },
  {
    path: '/team',
    element: (
      <>
       <Navbar />
        <Team/>
      </>
    ),
  },
  {
    path:'/projects',
    element: (
        <>
        <Navbar/>
        <Projects/>
        </>    )
  },
  {
    path: '*',
    element: <Navigate to="/home" replace />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}