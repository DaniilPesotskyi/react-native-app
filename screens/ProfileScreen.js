import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import BackgroundImage from "./../assets/images/bg-photo.jpg";

import postImage from "./../assets/images/postExample.jpg";
import userImage from "./../assets/images/userImage.jpg";

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.leaveBtn} onPress={() => navigation.navigate("Login")}>
          <Svg width={24} height={24}>
            <Path
              d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M17 16L21 12L17 8"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M21 12H9"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View style={styles.userImageWrap}>
          <Image source={userImage} style={styles.userImage} />
          <TouchableOpacity style={styles.removePhotoButton}>
            <Svg
              width={37}
              height={37}
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Circle
                cx="18.4999"
                cy="18.5"
                r="12"
                transform="rotate(-45 18.4999 18.5)"
                fill="white"
                stroke="#E8E8E8"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
                fill="#BDBDBD"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>Natali Romanova</Text>
        <ScrollView>
          <View>
            <Image style={styles.postImage} source={postImage} />
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.dataBlockWrap}>
              <View style={styles.commentsWrap}>
                <TouchableOpacity>
                  <Svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5Z"
                      fill="#FF6C00"
                    />
                  </Svg>
                </TouchableOpacity>
                <Text style={styles.dataValue}>8</Text>
              </View>
              <View style={styles.likesWrap}>
                <TouchableOpacity>
                  <Svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M13.3646 7.59996H12.8646C12.8646 7.87611 13.0884 8.09996 13.3646 8.09996V7.59996ZM13.3646 4.39998H13.8646H13.3646ZM10.7735 2V1.5C10.5811 1.5 10.4059 1.6103 10.3227 1.78369L10.7735 2ZM7.31863 9.19995L6.86785 8.98365C6.83545 9.05115 6.81863 9.12508 6.81863 9.19995H7.31863ZM7.31863 17.9999H6.81863C6.81863 18.276 7.04249 18.4999 7.31863 18.4999V17.9999ZM17.0612 17.9999L17.0665 17.4999H17.0612V17.9999ZM18.7886 16.6399L18.2953 16.5582L18.2952 16.5591L18.7886 16.6399ZM19.9805 9.43995L20.4738 9.52161L20.474 9.52081L19.9805 9.43995ZM18.2531 7.59996V8.09999L18.2584 8.09994L18.2531 7.59996ZM7.31852 17.9999V18.4999C7.59466 18.4999 7.81852 18.276 7.81852 17.9999H7.31852ZM7.31852 9.19995H7.81852C7.81852 8.92381 7.59466 8.69995 7.31852 8.69995V9.19995ZM13.8646 7.59996V4.39998H12.8646V7.59996H13.8646ZM13.8646 4.39998C13.8646 2.76298 12.4439 1.5 10.7735 1.5V2.5C11.9651 2.5 12.8646 3.38604 12.8646 4.39998L13.8646 4.39998ZM10.3227 1.78369L6.86785 8.98365L7.76942 9.41626L11.2242 2.21631L10.3227 1.78369ZM6.81863 9.19995V17.9999H7.81863V9.19995H6.81863ZM7.31863 18.4999H17.0612V17.4999H7.31863V18.4999ZM17.056 18.4999C18.1356 18.5112 19.1085 17.7805 19.2821 16.7207L18.2952 16.5591C18.2104 17.077 17.7096 17.5067 17.0665 17.4999L17.056 18.4999ZM19.2819 16.7216L20.4738 9.52161L19.4873 9.35829L18.2953 16.5582L19.2819 16.7216ZM20.474 9.52081C20.5761 8.89746 20.3756 8.27092 19.9407 7.80775L19.2117 8.4922C19.442 8.73749 19.5371 9.05422 19.4871 9.3591L20.474 9.52081ZM19.9407 7.80775C19.5079 7.34665 18.8878 7.09328 18.2479 7.09999L18.2584 8.09994C18.6321 8.09602 18.9794 8.24483 19.2117 8.4922L19.9407 7.80775ZM18.2531 7.09996H13.3646V8.09996H18.2531V7.09996ZM7.31852 17.4999H4.72741V18.4999H7.31852V17.4999ZM4.72741 17.4999C4.01276 17.4999 3.5 16.972 3.5 16.3999H2.5C2.5 17.5951 3.53401 18.4999 4.72741 18.4999V17.4999ZM3.5 16.3999V10.7999H2.5V16.3999H3.5ZM3.5 10.7999C3.5 10.2278 4.01276 9.69995 4.72741 9.69995V8.69995C3.53401 8.69995 2.5 9.60476 2.5 10.7999H3.5ZM4.72741 9.69995H7.31852V8.69995H4.72741V9.69995ZM6.81852 9.19995V17.9999H7.81852V9.19995H6.81852Z"
                      fill="#FF6C00"
                    />
                  </Svg>
                </TouchableOpacity>
                <Text style={styles.dataValue}>153</Text>
              </View>
              <View style={styles.locationWrap}>
                <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
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
                </TouchableOpacity>
                <Text>Ukraine</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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

  mainContainer: {
    position: "relative",
    width: "100%",
    height: 590,
    marginTop: "auto",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  leaveBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },

  userImageWrap: {
    position: "relative",

    width: 120,
    height: 120,
    marginTop: -60,
    marginBottom: 32,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  userImage: {
    width: "100%",
    height: "100%",

    borderRadius: 16,
  },

  removePhotoButton: {
    position: "absolute",
    top: 81,
    right: -15,
  },

  userName: {
    marginBottom: 33,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
  },

  //   POST

  postImage: {
    width: 343,
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
  },

  postTitle: {
    marginBottom: 10,

    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  commentsWrap: {
    flexDirection: "row",
    gap: 6,

    marginRight: 25,
  },

  likesWrap: {
    flexDirection: "row",
    gap: 6,
  },

  locationWrap: {
    flexDirection: "row",
    gap: 6,

    marginLeft: "auto",
  },

  dataValue: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  dataBlockWrap: {
    flexDirection: "row",

    marginBottom: 32,
  },
});

export default ProfileScreen;
