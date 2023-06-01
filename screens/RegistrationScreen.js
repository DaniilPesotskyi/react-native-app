import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import BackgroundImage from "./../assets/images/bg-photo.jpg";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("");
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
    <View>
      <View>
        <Image />
        <TouchableOpacity></TouchableOpacity>
      </View>
      <Text style={styles.formTitle}>Реєстрація</Text>
      <View style={styles.inputsList}>
        <TextInput
          style={styles.input}
          value={login}
          onChangeText={onChangeLogin}
          placeholder="Логін"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Адреса електронної пошти"
        />
        <View>
          <TextInput
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
            <Text>Показати</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!isKeyboardVisible && (
        <TouchableOpacity style={styles.submitButton}>
          <Text>Зареєстуватися</Text>
        </TouchableOpacity>
      )}
      <View>
        <Text>Вже є акаунт?</Text>
        <TouchableOpacity>
          <Text>Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    marginBottom: 33,

    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },

  inputsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,

    marginBottom: 43,
  },

  showPasswordButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },

  input: {
    width: 343,
    height: 50,
    padding: 15,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  submitButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 16,
    paddingBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 12,
  },
});

export default RegistrationScreen;
