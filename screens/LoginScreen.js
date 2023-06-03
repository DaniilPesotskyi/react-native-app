import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import BackgroundImage from "./../assets/images/bg-photo.jpg";

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <View style={styles.registrationForm}>
        <Text style={styles.formTitle}>Увійти</Text>
        <View style={styles.inputsList}>
          <TextInput
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Адреса електронної пошти"
          />
          <View>
            <TextInput
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry={isSecureTextEntry}
              placeholder="Пароль"
            />
            <TouchableOpacity
              onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
              style={styles.showPasswordButton}
            >
              <Text style={styles.showPasswordButtonText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        {!isKeyboardVisible && (
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Увійти</Text>
          </TouchableOpacity>
        )}
        {!isKeyboardVisible && (
          <View style={styles.difAction}>
            <Text style={styles.difActionText}>Немає акаунту?</Text>
            <TouchableOpacity>
              <Text style={styles.difActionText}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  registrationForm: {
    position: "relative",
    width: "100%",
    paddingTop: 32,
    marginTop: "auto",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  formTitle: {
    marginBottom: 33,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
  },

  inputsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,

    marginBottom: 40,
  },

  showPasswordButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },

  showPasswordButtonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  input: {
    width: 343,
    height: 50,
    padding: 15,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  submitButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 343,
    marginBottom: 16,

    paddingTop: 16,
    paddingBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  submitButtonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },

  difAction: {
    flexDirection: "row",
    gap: 3,
    marginBottom: 110,
  },

  difActionText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default LoginScreen;
