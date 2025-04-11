import { View, StyleSheet, ScrollView } from 'react-native';
import Nav from './src/Pages/jogos/Nav';
import Jogos from './src/Pages/jogos/Jogos';
import Footer from './src/Pages/jogos/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView style={styles.content}>
      <Jogos /> 
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#750000', // Cor de fundo vermelha escura
  },
  content: {
    flex: 1, // O ScrollView ocupa todo o espaço disponível, exceto o do Footer
  },
});