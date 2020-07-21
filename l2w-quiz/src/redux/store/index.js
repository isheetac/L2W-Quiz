import { createStore } from "redux";
import { updateState } from "../reducer/reducer";

export const store = createStore(updateState);
