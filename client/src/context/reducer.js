import { initialState } from "./appContext";

import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
} from "./actions";


const reducer = (state, action) => {

    throw new Error(`no such action: ${action.type}`);

}
export default reducer;