import { combineReducers } from 'redux';

import cab from './cab';
import ems from './ems';
import weazel from './weazel';
import settingsWidget from './settingsWidget';

export default combineReducers({
  cab,
  ems,
  weazel,
  settingsWidget,
});
