import { CAB_LAYOUT_SETTINGS } from '../actions/types';

const initialState = {
  ranks: [
    'Chief Executive Officer',
    'Chief Operations Officer',
    'Chief Financial Officer',
    'Director',
    'Manager',
    'Assistant Manager',
    'Supervisor',
    'Senior Driver',
    'Driver',
    'Junior Driver',
    'Trainee',
    'Probationary Trainee',
  ],
  layout: {
    header: {
      inputOne: { fontSize: 72, xAxis: 1100, yAxis: 140 },
      inputTwo: { fontSize: 52, xAxis: 1100, yAxis: 200 },
    },
    title: {
      inputOne: { fontSize: 52, xAxis: 50, yAxis: 50 },
    },
    signature: {
      fullname: { fontSize: 68, xAxis: 500, yAxis: 130 },
      badge: { fontSize: 46, xAxis: 500, yAxis: 190 },
      rankText: { fontSize: 34, xAxis: 500, yAxis: 255 },
      inputOne: { fontSize: 34, xAxis: 500, yAxis: 305 },
      inputTwo: { fontSize: 34, xAxis: 500, yAxis: 350 },
    },
  },
};

function configReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CAB_LAYOUT_SETTINGS:
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

export default configReducer;
