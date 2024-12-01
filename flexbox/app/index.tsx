import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>
      <View style={styles.listTextContainer}>
        <Text style={styles.listComponent}>Beranda</Text>
        <Text style={styles.listComponent}>Dokumentasi</Text>
        <Text style={styles.listComponent}>Karya</Text>
        <Text style={styles.listComponent}>Tentang</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text style={styles.textStyle}>React</Text>
        <Image
          source={require("../assets/images/react-logo.png")}
          style={styles.avatarImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  flexContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    flexWrap: "nowrap",
    marginHorizontal: 20,
  },
  box: {
    width: 60,
    height: 80,
  },
  box1: {
    width: 80,
    backgroundColor: "#FF5733",
  },
  box2: {
    backgroundColor: "#33FF57",
  },
  box3: {
    backgroundColor: "#3357FF",
  },
  box4: {
    backgroundColor: "#F0FF33",
  },
  box5: {
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#800080",
  },
  listTextContainer: {
    marginVertical: 5,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    //flex : 1,
    alignContent: "flex-start",
    marginHorizontal: 0
  },
  listComponent: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    padding: 10,
    marginRight: 10,
  },
  avatarContainer: {
    marginTop: 80,
    //marginVertical: 20,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  avatarImage: {
    width: 120,
    height: 120,
  },
});
