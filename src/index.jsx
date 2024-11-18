import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import './style.css';
import Root from './routes/root';
import Main from './Main';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
		errorElement: <ErrorPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);