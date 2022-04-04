import { WEAZEL_LAYOUT_SETTINGS } from '../actions/types';

const initialState = {
  ranks: [],
  layout: {
    header: {
      inputOne: { fontSize: 72, xAxis: 1200, yAxis: 160 },
      inputTwo: { fontSize: 52, xAxis: 1200, yAxis: 220 },
    },
    title: {
      inputOne: { fontSize: 52, xAxis: 50, yAxis: 50 },
    },
  },
};

function weazelReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WEAZEL_LAYOUT_SETTINGS:
      const key = Object.keys(payload.layoutValue)[0];
      return {
        ...state,
        layout: {
          ...state.layout,
          [payload.layoutAction]: {
            ...state.layout[payload.layoutAction],
            [key]: {
              ...state.layout[payload.layoutAction][key],
              ...payload.layoutValue[key],
            },
          },
        },
      };
    default:
      return state;
  }
}

export default weazelReducer;
