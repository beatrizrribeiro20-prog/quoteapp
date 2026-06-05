import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <Text style={styles.text}>
        This app displays motivational quotes using a public API.
      </Text>

      <Text style={styles.text}>
        Built with React Native and Expo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});