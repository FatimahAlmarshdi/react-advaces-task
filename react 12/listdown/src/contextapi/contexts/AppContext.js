import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
export const AppContext = createContext({ appState: {}, appDispatch: {} });

function AppProvider(props) {
  const appInitialState = {
    Location: [],
 }

  const [appState, appDispatch] = useReducer(AppReducer, appInitialState);

  return <AppContext.Provider value={{ appState, appDispatch }}>{props.children}</AppContext.Provider>;
}
export default AppProvider;

