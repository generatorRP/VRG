const initialState = {
  cab: {
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
  },
  ems: {
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
  },
};

function configReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_SETTINGS':
      return state;

    default:
      return state;
  }
}

export default configReducer;
