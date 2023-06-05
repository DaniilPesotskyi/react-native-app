import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Keyboard } from "react-native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import { useState, useEffect } from "react";
import ProfileScreen from "./ProfileScreen";
import { Ionicons, Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const [tabMenuVisible, setTabMenuVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setTabMenuVisible(false);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setTabMenuVisible(true);
      }
    );
  });
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: `${tabMenuVisible ? "flex" : "none"}`,
          alignItems: "center",
          height: 60
        },
        tabBarLabelStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-grid-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
