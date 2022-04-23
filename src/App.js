import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap';
import './utils/convertText';
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './componenets/Home';
import LSEMS from './componenets/ems/Lsems';
import Weazel from './componenets/weazel/Weazel';
import Cab from './componenets/cab/Cab';
import TextGenerator from './componenets/textGenerator/TextGenerator';
import Notifications from './componenets/test/Notifications';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path='ems/*' element={<LSEMS />} />
					<Route path='weazel/*' element={<Weazel />} />
					<Route path='cab/*' element={<Cab />} />
					<Route path='text-generator' element={<TextGenerator />} />
					<Route path='test' element={<Notifications />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
