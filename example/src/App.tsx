import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getAudioRoutes } from 'react-native-audio-routes';
import type { AudioRoute } from 'react-native-audio-routes';

export default function App() {
  const [audioRoutes, setAudioRoutes] = useState<AudioRoute[]>([]);

  useEffect(() => {
    const fetchAudioRoutes = async () => {
      try {
        const routes = await getAudioRoutes();
        setAudioRoutes(routes);
      } catch (error) {
        console.error('Error fetching audio routes:', error);
      }
    };

    fetchAudioRoutes();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Available Audio Routes: {JSON.stringify(audioRoutes)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
