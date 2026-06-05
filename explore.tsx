import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';

export default function QuotesScreen() {
  const { name } = useLocalSearchParams();

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, {name}
      </Text>

      <FlatList
        data={quotes}
        keyExtractor={(item: any) =>
          item.id.toString()
        }
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Text>{item.quote}</Text>

            <Text style={styles.author}>
              - {item.author}
            </Text>
          </View>
        )}
      />

      <Button
        title="About App"
        onPress={() => router.push('/about')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  author: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});