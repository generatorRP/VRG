import { LOAD_LAYOUT_SETTINGS, UPDATE_LAYOUT_SETTINGS } from './types';

export const loadLayoutSettings =
  (actionType, layoutConfig, dimensions) => (dispatch) => {
    dispatch({
      type: LOAD_LAYOUT_SETTINGS,
      payload: {
        actionType,
        layoutName: layoutConfig.split('.')[0],
        layoutAction: layoutConfig.split('.')[1],
        canvas: {
          ...dimensions,
        },
      },
    });
  };

export const updateLayoutSettings = (key, layoutValue) => (dispatch) => {
  dispatch({
    type: UPDATE_LAYOUT_SETTINGS,
    payload: {
      key,
      layoutValue,
    },
  });
};
