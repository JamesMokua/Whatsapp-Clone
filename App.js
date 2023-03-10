import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatSettingsScreen from "./screens/ChatSettingsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ChatListScreen from "./screens/ChatListScreen";

SplashScreen.preventAutoHideAsync(); //prevents splashscreen from going away
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    // Load fonts
    async function loadFonts() {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts//Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsLoaded(true);
      }
    }
    loadFonts();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }
const TabNavigator = () =>{
  return(
    <Tab.Navigator screenOptions={{headerTitle: ''}}>
    <Tab.Screen name="ChatList" component={ChatListScreen} options={{tabBarLabel: 'Chats'}}/>
    <Tab.Screen name="Settings" component={SettingsScreen} options={{
      tabBarLabel: 'Settings'
    }}/>
  </Tab.Navigator>
  )
}
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayout}>
     
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="ChatSettings" component={ChatSettingsScreen} options={{
              headerTitle: 'Chat Settings',
              headerBackTitle: 'Back'
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
     
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 20,
    fontFamily: "regular",
  },
});
