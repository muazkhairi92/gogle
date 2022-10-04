import { createStore , combineReducers} from "redux";
import emailReducer from "./slices/email";
import homeReducer from "./slices/home";
import userReducer from "./slices/user";

const reducers = combineReducers({
    home:homeReducer,
    email:emailReducer,
    user:userReducer,
});

const store = createStore(reducers);

export default store;