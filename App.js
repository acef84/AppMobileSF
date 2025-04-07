import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BarraPesquisa from './src/Pages/BarraPesquisa';
import Cadastro from './src/Pages/Cadastro';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';
import Suporte from './src/Pages/Suporte';
import ViewJogos from './src/Pages/ViewJogos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
