import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.text}>Welcome to Movie App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  image: { width: 300, height: 300 },
  text: { color: '#fff', fontSize: 24, marginTop: 20 },
});
