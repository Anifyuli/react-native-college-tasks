import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type StoryAvatarProps = {
  sourceImg: number;
  textImg: string;
};

export default function StoryAvatar({ sourceImg, textImg }: StoryAvatarProps) {
  return (
    <View style={styles.container}>
      <Image source={sourceImg} style={styles.img} />
      <Text style={styles.textImg}>{textImg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 3,
  },
  textImg: {
    marginVertical: 5,
    fontSize: 18,
    maxWidth: 65,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 10,
  },
});
