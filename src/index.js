import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EditStudent from './pages/EditStudent/EditStudent';
import ListStudents from './pages/ListStudents/ListStudents';
import ViewStudent from './pages/ViewStudent/ViewStudent';
import ListSchools from './pages/ListSchools/ListSchools';
import SchoolDashboard from './pages/SchoolDashboard/SchoolDashboard';
import ClassDashboard from './pages/ClassDashboard/ClassDashboard';
import CreateStudent from './pages/CreateStudent/CreateStudent';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Hello from the router</>
  },
  {
    path: '/ViewStudent/:id',
    element: <ViewStudent />
  },
  {
    path: '/EditStudent',
    element: () => { return redirect('/'); }
  },
  {
    path: '/EditStudent/:id',
    element: <EditStudent />
  },
  // {
  //   path: '/ListStudents',
  //   element: <ListStudents />
  // },
  {
    path: '/ListSchools',
    element: <ListSchools />
  },
  {
    path: '/SchoolDashboard/:id',
    element: <SchoolDashboard />
  },
  {
    path: '/ClassDashboard/:id',
    element: <ClassDashboard />
  },
  {
    path: '/CreateStudent',
    element: <CreateStudent />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
