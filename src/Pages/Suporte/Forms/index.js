import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Forms = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mensagem:</Text>
        <TextInput style={styles.input} multiline={true} numberOfLines={4} />
      </View>
      <Button
        title="Enviar"
        onPress={() => alert('Formulário enviado!')}
        color="#750000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
  },
});

export default Forms;