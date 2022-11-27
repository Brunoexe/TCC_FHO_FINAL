import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import theme from "./app/theme/default";
import Home from "./app/pages/Home";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <Home />
    </Provider>
  );
};

export default App;
