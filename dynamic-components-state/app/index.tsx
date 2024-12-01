import React, { useState, Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Index() {
  return <FunctionalBasedComponent />;
}

function FunctionalBasedComponent() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Angka saat ini: {number}</Text>
      <Button title="Tambah" onPress={incrementNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});
