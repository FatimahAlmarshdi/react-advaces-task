import * as appActionType from "../actions/AppAction";

export default function AppReducer(state, action) {
  switch (action.type) {
    case appActionType.Update_AppState:
      return { ...action.newAppState };
    default:
      return state;
  }
}
