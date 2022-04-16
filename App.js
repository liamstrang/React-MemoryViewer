import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import { AppContext } from "./services/appContext";

const users = require("./users/users.json");

const AppStateProvider = (props) => {
  const contextValue = { ...users };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default function App() {
  return (
    <AppStateProvider>
      <PaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </AppStateProvider>
  );
}
