import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import './style.css';
import Root from './routes/root';
import TicTacToe from './routes/tic-tac-toe';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
		errorElement: <ErrorPage/>,
	},	
	{
		path: "/tic-tac-toe",
		element: <TicTacToe/>,	
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
