import { EMS_LAYOUT_SETTINGS } from '../actions/types';

const initialState = {
  ranks: [
    'Chief',
    'Assistant Chief',
    'Deputy Chief',
    'Captain',
    'Lieutenant',
    'Supervising Paramedic',
    'Paramedic',
    'Senior EMT',
    'EMT',
  ],
  layout: {
    header: {
      inputOne: { fontSize: 72, xAxis: 1190, yAxis: 140 },
      inputTwo: { fontSize: 52, xAxis: 1190, yAxis: 190 },
    },
    title: {
      inputOne: { fontSize: 52, xAxis: 50, yAxis: 50 },
    },
    signature: {
      fullname: { fontSize: 60, xAxis: 700, yAxis: 130 },
      badge: { fontSize: 46, xAxis: 700, yAxis: 190 },
      rankImg: { xAxis: 465, yAxis: 105 },
      inputOne: { fontSize: 34, xAxis: 700, yAxis: 260 },
      inputTwo: { fontSize: 34, xAxis: 700, yAxis: 310 },
    },
  },
};

function emsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EMS_LAYOUT_SETTINGS:
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

export default emsReducer;
