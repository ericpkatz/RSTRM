import React from "react";
import GoogleMapView from "../components/GoogleMapView";
import { StyleSheet, View } from "react-native";
import GoogleSearchBar from "../components/GoogleSearchBar";

export default function Map() {
  return (
    <View style={styles.container}>
      <GoogleMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
