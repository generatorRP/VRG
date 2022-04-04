import { EMS_LAYOUT_SETTINGS } from './types';

export const loadSettings = (layout) => (dispatch) => {
  dispatch({
    type: EMS_LAYOUT_SETTINGS,
    payload: layout,
  });
};
