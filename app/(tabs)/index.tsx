import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import Albums from "../components/albums";
import ParallaxScrollView from "../components/parallax-scroll-view";
import { ThemedText } from "../components/themed-text";

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8E4162', dark: '#8E4162' }}
      headerImage={
        <Image
          source={require('@/assets/images/sabrifull.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText type="title">Hello!</ThemedText>
      <ThemedText type="default">Sabrina welcomes you.</ThemedText>
      <Albums/>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    position: 'absolute'
  },
  albumCover: {
    height: 150,
    width: 150,
    position: 'relative'
  }
});
