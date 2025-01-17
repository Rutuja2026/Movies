import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: movie.image?.medium }} style={styles.image} />
      <View>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.summary} numberOfLines={2}>{movie.summary.replace(/<[^>]*>?/gm, '')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, backgroundColor: '#222', borderRadius: 10, overflow: 'hidden' },
  image: { width: 100, height: 150 },
  title: { color: '#fff', fontSize: 18, margin: 10 },
  summary: { color: '#aaa', fontSize: 14, marginHorizontal: 10 },
});
