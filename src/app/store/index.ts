import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cashReducer } from 'app/store/cashReducer';
import { customerReducer } from 'app/store/customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
