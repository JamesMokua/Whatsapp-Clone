import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";


const AppNavigator = (props) => {
 const isAuth = false;
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {isAuth ? <MainNavigator/> :
      <AuthScreen/>
}
    </NavigationContainer>
  );
};

export default AppNavigator;