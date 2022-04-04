import { LOAD_LAYOUT_SETTINGS, UPDATE_LAYOUT_SETTINGS } from '../actions/types';

const initialState = {
  actionType: null,
  layoutName: null,
  layoutAction: null,
  canvas: null,
};

function settingsWidgetReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LAYOUT_SETTINGS:
      return {
        ...state,
        actionType: payload.actionType,
        layoutName: payload.layoutName,
        layoutAction: payload.layoutAction,
        canvas: payload.canvas,
      };
    case UPDATE_LAYOUT_SETTINGS:
      return {
        ...state,
        layout: {
          ...state.layout,
          [payload.key]: {
            ...state.layout[payload.key],
            ...payload.layoutValue,
          },
        },
      };
    default:
      return state;
  }
}

export default settingsWidgetReducer;
