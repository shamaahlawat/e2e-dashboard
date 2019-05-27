import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_details/reducers';
import admin_details from './admin_details/reducers';

const rootReducer = combineReducers({
    page_details,
    admin_details,
    routing: routerReducer
});

export default rootReducer;