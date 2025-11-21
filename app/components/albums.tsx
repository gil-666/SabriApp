import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function Albums() {
  return (
    <ScrollView
      horizontal={true}
      style={{ alignSelf: 'center' }}
      contentContainerStyle={{ paddingHorizontal: 20 }} // Adds padding on left/right of the scrollview
    >
      <View style={styles.albumContainer}>
        <Image
          source={{
            uri: 'https://i.discogs.com/eSBE7gnmsT0iE6RS58LI0XJCULoDY5iH0Oi8Iv32llE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNTQ5/ODQ5LTE3MjQzNzY4/MDEtMjY2NS5qcGVn.jpeg'
          }}
          style={styles.albumCover}
        />
        <Text style={styles.albumTitle}>Sweet N' Sour</Text>
      </View>

      <View style={styles.albumContainer}>
        <Image
          source={{
            uri: 'https://i.discogs.com/8qSNxnTEqsg4AhS3ZTePznpVEuTw1stexh3JBkmcAmc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0OTQ5/OTk2LTE3NTY0Mjk0/MjMtNTE1NC5qcGVn.jpeg'
          }}
          style={styles.albumCover}
        />
        <Text style={styles.albumTitle}>Man's Best Friend</Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  albumContainer: {
    alignItems: 'center',
    marginRight: 20, // Adds space between album containers
  },
  albumCover: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10, // Adds space between title and image
  },
});

export default Albums;
