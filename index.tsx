import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    setError('');
    router.push({
      pathname: '/explore',
      params: { name },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Quotes App</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button
        title="View Quotes"
        onPress={handleContinue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  error: {
    color: 'red',
    marginBottom: 10,
  },
});