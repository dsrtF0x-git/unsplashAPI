import React from "react";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppNavigation } from "./navigation/AppNavigation";

const store = createStore(reducer, applyMiddleware(thunk));

function RootComponent() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default RootComponent;
