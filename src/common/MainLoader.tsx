import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export const MainLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="red" />
    </View>
  );
}

export default MainLoader;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});