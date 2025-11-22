import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Albums from "../components/albums";
import LyricOfTheDay from "../components/lotd";
import ParallaxScrollView from "../components/parallax-scroll-view";
import { ThemedText } from "../components/themed-text";

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#8E4162", dark: "#8E4162" }}
      headerImage={
        <View>
          <Image
            source={require("@/assets/images/starsbg.png")}
            style={{ width: "100%", height: 250, opacity: 0.2 }}
          />
          <Image
            source={require("@/assets/images/sabrifull.png")}
            style={styles.reactLogo}
          />
          <ThemedText
            type="title"
            style={{
              top: "42%",
              right: 40,
              alignSelf: "center",
              position: "absolute",
              color: "white",
            }}
          >
            Hello!
          </ThemedText>
        </View>
      }
    >
      <View style={{ gap: 16, marginBottom: 0 , marginHorizontal: 25, marginTop: 20}}>
        <LyricOfTheDay />
        <ThemedText type="default" style={{ alignSelf: "center" }}>
          Tap on an album to view lyrics
        </ThemedText>
      </View>
      <Albums />
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 308,
    width: 310,
    top: 0,
    left: 0,
    position: "absolute",
  },
  albumCover: {
    height: 150,
    width: 150,
    position: "relative",
  },
});
