import { colorChange } from "./color";
import { sizeChange } from "./size";
import { toolChange } from "./tool";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    color: colorChange,
    size: sizeChange,
    tool: toolChange
});