import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Suporte</Text>
      <Text style={styles.subtitle}>
        Se você estiver com alguma dúvida ou precisar de ajuda, entre em contato
        conosco através do formulário abaixo.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 5,
    color: 'white',
  },
});

export default Header;