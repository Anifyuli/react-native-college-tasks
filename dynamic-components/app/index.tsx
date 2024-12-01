import StoryAvatar from "@/components/StoryAvatar";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <StoryAvatar
          sourceImg={require("../assets/images/icon.png")}
          textImg="Expo"
        />
        <StoryAvatar
          sourceImg={require("../assets/images/react-logo.png")}
          textImg="React"
        />
        <StoryAvatar
          sourceImg={require("../assets/images/partial-react-logo.png")}
          textImg="Redux"
        />
        <StoryAvatar
          sourceImg={require("../assets/images/icon.png")}
          textImg="Expo"
        />
        <StoryAvatar
          sourceImg={require("../assets/images/react-logo.png")}
          textImg="React"
        />
        <StoryAvatar
          sourceImg={require("../assets/images/partial-react-logo.png")}
          textImg="Redux"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
