import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

type CounterType = {
  countedNumber: number;
};

export default function Counter() {
  const [countedNumber, setCountedNumber] = useState<CounterType>({
    countedNumber: 0,
  });

  const incrementCounter = () => {
    setCountedNumber((prevState) => ({
      countedNumber: prevState.countedNumber + 1,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{countedNumber.countedNumber}</Text>
      <Button title="Tambah" onPress={incrementCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 24,
    marginBottom: 16,
  },
});
