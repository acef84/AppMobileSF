import { View, StyleSheet, ScrollView } from 'react-native';
import Dicas from './src/Pages/Suporte/Dicas';
import FooterS from './src/Pages/Suporte/FooterS';
import Forms from './src/Pages/Suporte/Forms';
import Header from './src/Pages/Suporte/Header';
import NavS from './src/Pages/Suporte/NavS';

export default function App() {
  return (
    <View style={styles.container}>
      <NavS />
      <ScrollView>
        <Header />
        <Forms />
        <Dicas />
      </ScrollView>
      <FooterS/>
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