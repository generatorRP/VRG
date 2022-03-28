import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './componenets/Home';
import LSEMS from './componenets/ems/Lsems';
import Weazel from './componenets/weazel/Weazel';
import Cab from './componenets/cab/Cab';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='ems/*' element={<LSEMS />} />
          <Route path='weazel/*' element={<Weazel />} />
          <Route path='cab/*' element={<Cab />} />
          <Route path='*' element={<h2>NOT FOUND</h2>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
