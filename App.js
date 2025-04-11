import { View, StyleSheet, ScrollView } from 'react-native';
import Nav from './src/Pages/ViewJogos/Nav/Nav';
import TelaDownload from './src/Pages/ViewJogos/Game/TelaDowload';
import Footer from './src/Pages/ViewJogos/Footer/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
      <ScrollView>
        <TelaDownload/>
      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#750000',
  },
  content: {
    flex: 1, // O ScrollView ocupa todo o espaço disponível, exceto o do Footer
  },
});