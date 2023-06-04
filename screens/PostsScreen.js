import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Svg, { Path } from "react-native-svg";
import userImage from "./../assets/images/userImage.jpg";
const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Публікації</Text>
        <TouchableOpacity>
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
      </View>
      <View style={styles.userCard}>
        <Image style={styles.userImage} source={userImage} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 20,
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
    marginLeft: 138,
    marginRight: "auto",

    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHheight: 22,
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    paddingLeft: 16,
    paddingRight: 16,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },

  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
