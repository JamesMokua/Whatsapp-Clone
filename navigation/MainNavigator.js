import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatSettingsScreen from "../screens/ChatSettingsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatListScreen from "../screens/ChatListScreen";

import { Ionicons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainNavigator = (props) => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{ headerTitle: "" }}>
        <Tab.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{
            tabBarLabel: "Chats",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="chatbubble-outline" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="ChatSettings"
        component={ChatSettingsScreen}
        options={{
          headerTitle: "Chat Settings",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
