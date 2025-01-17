import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.image?.medium }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary.replace(/<[^>]*>?/gm, '')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 10 },
  image: { width: '100%', height: 300, borderRadius: 10 },
  title: { color: '#fff', fontSize: 24, marginVertical: 10 },
  summary: { color: '#aaa', fontSize: 16 },
});
