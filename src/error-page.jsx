import { useRouteError } from "react-router-dom";

import './styles/style.css';

export default function ErrorPage() {
	const error = useRouteError();
  console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>An unexpected error has occurred</p>
			<p>
        <i>{(error.status + " " + error.statusText) || error.status || error.statusText || error.message}</i>
      </p>
		</div>
	);
}
