import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ImageColors from "react-native-image-colors";
function isColorLight(hex: string) {
  hex = hex.replace("#", "");

  // convert shorthand (#abc)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 150; // threshold
}

function Albums() {
  const [colors, setColors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function extractColors() {
      const newColors: Record<string, string> = {};

      for (const album of albums) {
        try {
          const result = await ImageColors.getColors(album.image, {
            fallback: "#333",
            cache: true,
            key: album.title,
          });

          let hex = "#333";

          if (result.platform === "android") hex = result.dominant ?? "#333";
          if (result.platform === "ios") hex = result.primary ?? "#333";

          newColors[album.title] = hex;
        } catch (e) {
          newColors[album.title] = "#333";
        }
      }

      setColors(newColors);
    }

    extractColors();
  }, []);

  return (
    <ScrollView
      style={{ marginBottom: 20 }}
      contentContainerStyle={styles.grid}
    >
      {albums.map((album) => {
        const bgColor = colors[album.title] ?? "#333";
        const light = isColorLight(bgColor);
        return (
          <MaskedView
            key={album.title}
            style={styles.maskWrapper}
            maskElement={
              <LinearGradient
                colors={[
                  "rgba(0, 0, 0, 0.6)",
                  "rgba(0,0,0,1)",
                  "rgba(0, 0, 0, 0.6)",
                ]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0.1 }}
                style={{ flex: 1 }}
              />
            }
          >
            <View
              style={[
                styles.albumContainer,
                { backgroundColor: bgColor + "AA" },
              ]}
            >
              <Image source={{ uri: album.image }} style={styles.albumCover} />
              <Text
                style={[styles.albumTitle, { color: light ? "#333" : "#fff" }]}
              >
                {album.title}
              </Text>
            </View>
          </MaskedView>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    // padding: 10,
    // gap: 15,
  },

  maskWrapper: {
    width: "50%",
    borderRadius: 12,
    overflow: "hidden",
  },

  albumContainer: {
    padding: 12,
    alignItems: "center",
    borderRadius: 12,
  },

  albumCover: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  albumTitle: {
    marginTop: 8,
    color: "#ffffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const albums = [
  {
    title: "Man's Best Friend",
    image:
      "https://i.discogs.com/8qSNxnTEqsg4AhS3ZTePznpVEuTw1stexh3JBkmcAmc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0OTQ5/OTk2LTE3NTY0Mjk0/MjMtNTE1NC5qcGVn.jpeg",
  },
  {
    title: "Short n' Sweet",
    image:
      "https://i.discogs.com/eSBE7gnmsT0iE6RS58LI0XJCULoDY5iH0Oi8Iv32llE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNTQ5/ODQ5LTE3MjQzNzY4/MDEtMjY2NS5qcGVn.jpeg",
  },
  {
    title: "emails i can't send",
    image:
      "https://i.discogs.com/IgPQwfZZH-adnsW9eD4iGpclUVLAwb9kgi5i5DhzEu4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTQy/MDY3LTE2NjY3MTQ4/NzYtNDQ5Mi5qcGVn.jpeg",
  },
  {
    title: "Singular Act II",
    image:
      "https://i.discogs.com/DZYG4RLPEl7PHD6ra9A6ik_x8N5rXw_OvTyzIenyGwE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNjc5/NTMxLTE3MzUzMjY3/OTYtNzE5OC5qcGVn.jpeg",
  },
  {
    title: "Singular Act I",
    image:
      "https://i.discogs.com/rmTyPdS5FVnkkh0p8tqjzJT23htxshBG5vEAlG0r6Ic/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Mjgx/MTk5LTE2NjQ3MjEz/ODgtNTUwMi5qcGVn.jpeg",
  },
  {
    title: "Evolution",
    image:
      "https://i.discogs.com/egYUWYAFRO5KayeZaPGo28DuHDJBfdAyZjHsUv1sdxw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNjgy/OTMzLTE3MzUzNTkw/ODYtMTU0OC5qcGVn.jpeg",
  },
  {
    title: "Eyes Wide Open",
    image:
      "https://i.discogs.com/UYVGUg4Z1TuVerIq7ikCaw_uqDhNYYOhr-PDhjtKW1U/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDYx/OTQtMTQzMDEzMDM0/NS03MTY5LmpwZWc.jpeg",
  },
];

export default Albums;
