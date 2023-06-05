import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Svg, { Path, Rect, G, ClipPath, Defs } from "react-native-svg";
const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const checkFormCompletion = () => {
    if (title && location) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    checkFormCompletion();
  }, [title, location]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M20 12H4"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M10 18L4 12L10 6"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Створити публікацію</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.photoInput}>
            <TouchableOpacity style={styles.photoInputBtn}>
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <G clip-path="url(#clip0_36_0)">
                  <Path
                    d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z"
                    fill="#BDBDBD"
                  />
                  <Path
                    d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                    fill="#BDBDBD"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_36_0">
                    <Rect width="24" height="24" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </TouchableOpacity>
          </View>
          <Text style={styles.photoInputText}>Завантажте фото</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            style={styles.avoidCont}
          >
            <View style={styles.inputList}>
              <TextInput
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Назва..."
              />

              <View style={styles.inputField}>
                <Svg
                  style={styles.locationIcon}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
                <TextInput
                  placeholderTextColor="#BDBDBD"
                  style={styles.locationInput}
                  value={location}
                  onChangeText={setLocation}
                  placeholder="Місцевість..."
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={isButtonActive ? styles.publishBtnActive : styles.publishBtn}
          >
            <Text
              style={
                isButtonActive
                  ? styles.publishBtnTextActive
                  : styles.publishBtnText
              }
            >
              Опубліковати
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: "#FFFFFF",
  },

  screenHeader: {
    paddingTop: 27,
    paddingBottom: 11,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 32,
    flexDirection: "row",

    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
  },

  screenTitle: {
    marginLeft: 70,
    marginRight: "auto",

    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHheight: 22,
  },

  mainContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  photoInput: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
  },

  photoInputBtn: {
    alignItems: "center",
    justifyContent: "center",

    width: 60,
    height: 60,

    backgroundColor: "#FFFFFF",
    borderRadius: 500,
  },

  photoInputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  inputList: {
    marginTop: 32,
    marginBottom: 32,

    flexDirection: "column",
    gap: 16,
  },

  inputField: {
    width: "100%",
    height: 50,
  },

  locationIcon: {
    position: "absolute",
    marginTop: 14,
  },

  input: {
    width: "100%",
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  locationInput: {
    width: "100%",
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  publishBtn: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,

    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },

  publishBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  publishBtnActive: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,

    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  publishBtnTextActive: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
});

export default CreatePostsScreen;
