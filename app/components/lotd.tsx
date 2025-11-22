import { View } from "react-native";
import { ThemedText } from "./themed-text";
function LyricOfTheDay() {
  return (
    <View>
      <ThemedText
        type="subtitle"
        style={{ alignSelf: "center", marginBottom: 10 }}
      >
        Lyric of the Day
      </ThemedText>
      <View
        style={{
          padding: 15,
          borderRadius: 20,
          boxShadow: "0 1px 6px rgba(0, 38, 255, 0.1)",
          backgroundColor: "rgba(134, 58, 134, 0.05)",
        }}
      >
        <ThemedText
            type="default"
          style={{
            alignSelf: "center",
            fontStyle: "italic",
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          "Please, please, please, don't prove em' right"
        </ThemedText>
      </View>
    </View>
  );
}

export default LyricOfTheDay;
