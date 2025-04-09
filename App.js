import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ViewJogos from './src/Pages/ViewJogos'; // CORRIGIDO AQUI

export default function App() {
  return (
    <View style={styles.container}>
      <ViewJogos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#750000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
