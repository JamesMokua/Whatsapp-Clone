import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";


const AppNavigator = (props) => {
 
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;