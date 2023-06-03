import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import RegistrationScreen from "./screens/RegistrationScreen";
import { useFonts } from "expo-font";
// import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      <PostsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
