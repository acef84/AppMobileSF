import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import screenshot1 from '../../../../assets/fb5.png';
import screenshot2 from '../../../../assets/fb3.png';
import screenshot3 from '../../../../assets/fb.png';

const TelaDownload = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Nome do jogo */}
      <Text style={styles.gameTitle}>FOBIA - ST. DINFNA HOTEL</Text>

      {/* Sobre o jogo */}
      <View style={styles.section}>
        <Text style={styles.title}>Sobre o Jogo</Text>
        <Text style={styles.text}>
        Passado, presente e futuro colidem no jogo de sobrevivência de terror Fobia: St. Dinfna Hotel. Explore um hotel em várias linhas do tempo e revele a história de uma seita e seu papel no plano deles...
        </Text>
      </View>

      {/* Capturas de tela */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.screenshotsContainer}>
        {[screenshot1, screenshot2, screenshot3].map((src, index) => (
          <Image key={index} source={src} style={styles.screenshot} />
        ))}
      </ScrollView>

      {/* Requisitos do sistema */}
      <View style={styles.section}>
        <Text style={styles.title}>Requisitos do Sistema</Text>
        <Text style={styles.text}>- Sistema Operacional: WINDOWS® 7, 8, 8.1, 10, 11</Text>
        <Text style={styles.text}>- Processador: Core i5 8600 or AMD Ryzen 5 3600X</Text>
        <Text style={styles.text}>- Memória: 8 GB de RAM</Text>
        <Text style={styles.text}>- Gráficos: NVIDIA GeForce GTX 1060 6GB</Text>
        <Text style={styles.text}>- Armazenamento: 10 GB de espaço disponível</Text>
      </View>

      {/* Botão de download */}
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://example.com/game-download.zip')}>
        <Text style={styles.buttonText}>Ver Mais</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  gameTitle: {
    fontSize: 21, // Aumentei o tamanho da fonte do título
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 20, // Adicionei margem superior para afastar do topo
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DCDCDC',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#DCDCDC',
    lineHeight: 22,
    textAlign: 'center',
  },
  section: {
    width: '90%',
    padding: 15,
    backgroundColor: '#52505080',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  screenshotsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  screenshot: {
    width: 220,
    height: 130,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 30,
    elevation: 6,
  },
  buttonText: {
    color: '#DCDCDC',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaDownload;

