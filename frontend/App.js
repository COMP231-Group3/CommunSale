import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListingPage from './Listing/ListingPage';
import color from './Palette';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your application.</Text>
      <ListingPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroungColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
