import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dicas(){

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas de Solução de Problemas:</Text>
      <Text style={styles.item}>• Verifique sua conexão com a internet.</Text>
      <Text style={styles.item}>• Certifique-se de que seu navegador está atualizado.</Text>
      <Text style={styles.item}>• Limpe o cache e os cookies do seu navegador.</Text>
      <Text style={styles.item}>• Reinicie seu dispositivo.</Text>
      <Text style={styles.item}>
        • Se o problema persistir, entre em contato conosco através do formulário acima.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    shadowColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ffffff',
  },
  item: {
    fontSize: 17,
    marginBottom: 10,
    color: '#fff',
  },
});