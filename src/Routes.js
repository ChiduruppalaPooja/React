import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthRoutes from './components/common/AuthRoutes';
import Courses from './pages/Courses/Courses';
import Pdf from './pages/PdfMaterial/PdfPage';
import RootLayout from './pages/RootLayout/RootLayout';
import { Provider } from 'react-redux';
import store from '../src/store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },    
  {
      path: '/login',
      element: <Login />,
  }, 
    {
      path: '/dashboard',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Dashboard/>,
        },        
      ],
    },
    {
      path:'/courses',
      element:<RootLayout/>,
      children:[
        {
          path:':courseId',
          element:<Courses/>
        }
      ]
    },
    {
      path:'/pdf',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Pdf/>
        }
      ]
    },        
  ])
const AppRouter = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Login />} />
        //         <Route path="/login" element={<Login />} />
        //         <Route path="/dashboard" element={<AuthRoutes>
        //             <RootLayout>
        //                 <Dashboard />
        //             </RootLayout>
        //         </AuthRoutes>} />
        //         <Route path="/courses/:courseId" element={
        //             <RootLayout>
        //                 <Courses />
        //             </RootLayout>
        //         } />
        //         <Route path="/pdf" element={<Pdf />} />
        //     </Routes>
        // </Router>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
};

export default AppRouter;
