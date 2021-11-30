import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import Dashboard from 'components/Dashboard';
import 'styles/main.scss';
import 'styles/global.scss';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Dashboard />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
