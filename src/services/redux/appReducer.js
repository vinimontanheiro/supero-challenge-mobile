import {handleActions} from 'redux-actions';
import {SET_APP, RESET_STORE} from './actions';

const initialState = {
  loading: false,
  token: ``,
};

const App = handleActions(
  {
    [RESET_STORE]: () => initialState,
    [SET_APP]: (state, {payload}) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);

export default App;
