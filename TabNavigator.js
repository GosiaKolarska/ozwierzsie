import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Catalog from "./src/Catalog/Catalog";
import ChatScreen from "./src/Chat/ChatScreen";
import LoginScreen from "./src/Login/LoginScreen";
// import useAuth from "./src/hooks/useAuth";
import Favourite from "./src/Favourite/Favourite";
import Search from "./src/Search/Search";
import Settings from "./src/Settings/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "./src/Catalog/Card/cardStyle";
import CardExtended from "./src/Catalog/Card/cardExtended";
import CardNav from "./navigator/CardNav";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // const { user } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "settings",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 34, height: 34 }}
                source={require("./assets/icons_PNG/icon__settings.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{
          title: "explore",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 34, height: 34 }}
                source={require("./assets/icons_PNG/icon__search.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "chat",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 34, height: 30 }}
                source={require("./assets/icons_PNG/icon__chat.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: "favourite",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 34, height: 30 }}
                source={require("./assets/icons_PNG/icon__heart.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
