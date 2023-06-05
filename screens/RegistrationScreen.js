import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import BackgroundImage from "./../assets/images/bg-photo.jpg";

const RegistrationScreen = ({navigation}) => {
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

  onUserRegistration = () => {
    console.log('--- ФОРМА РЕЄСТРАЦІЇ ---')
    console.log('Логін: ', login)
    console.log('Адреса електронноъ пошти: ', email)
    console.log('Пароль: ', password)

    onChangeLogin('')
    onChangeEmail('')
    onChangePassword('')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={BackgroundImage} style={styles.backgroundImage} />
        <View style={styles.registrationForm}>
          <View style={styles.imageInputWrap}>
            <TouchableOpacity style={styles.addPhotoButton}>
              <Svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Circle
                  cx="12.5"
                  cy="12.5"
                  r="12"
                  fill="white"
                  stroke="#FF6C00"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                  fill="#FF6C00"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <View style={styles.inputsList}>
            <TextInput
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={login}
              onChangeText={onChangeLogin}
              placeholder="Логін"
            />
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
            <TouchableOpacity style={styles.submitButton} onPress={onUserRegistration}>
              <Text style={styles.submitButtonText}>Зареєстуватися</Text>
            </TouchableOpacity>
          )}
          {!isKeyboardVisible && (
            <View style={styles.difAction}>
              <Text style={styles.difActionText}>Вже є акаунт?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.difActionText}>Увійти</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: "auto",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  imageInputWrap: {
    position: "relative",

    width: 120,
    height: 120,
    marginTop: -60,
    marginBottom: 32,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  addPhotoButton: {
    position: "absolute",
    top: 81,
    right: -12,
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
    marginBottom: 42,
  },

  difActionText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
