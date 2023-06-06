import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
const MapScreen = ({ navigation }) => {

  return (
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
        <Text style={styles.screenTitle}>Карта</Text>
      </View>
      <View style={styles.mainContainer}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          minZoomLevel={15}
          onMapReady={() => console.log("Map is ready")}
          onRegionChange={() => console.log("Region change")}
        >
          <Marker
            title="I am here"
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            description="Hello"
          />
        </MapView>
      </View>
    </View>
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
    marginLeft: 130,
    marginRight: "auto",

    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHheight: 22,
  },

  mainContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
