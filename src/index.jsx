import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import './styles/style.css';
import Root from './routes/root';
import TicTacToe from './routes/tic-tac-toe';
import ErrorPage from './error-page';
import ConnectFour from './routes/connect-four';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
		errorElement: <ErrorPage/>,
	},	
	{
		path: "/games/tic-tac-toe",
		element: <TicTacToe/>,	
	},
	{
		path: "/games/connect-four",
		element: <ConnectFour/>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
