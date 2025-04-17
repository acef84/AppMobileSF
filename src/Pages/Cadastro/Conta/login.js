import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CadastroScreen({ onCriarConta }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos');
    } else {
      Alert.alert('Login', 'Login efetuado com sucesso!');
     // *** AQUI VOCÊ ADICIONARÁ A LÓGICA DE NAVEGAÇÃO APÓS O LOGIN BEM-SUCEDIDO ***
      // Exemplo usando a navegação condicional que estamos utilizando:
      // setExibirTela('nomeDaSuaProximaTela');
      // Ou, se você futuramente usar o React Navigation, seria algo como:
      // navigation.navigate('NomeDaSuaProximaRota');
    }
  };

  return (
    <LinearGradient colors={['#8b0000', '#300000']} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <Text style={styles.logo}>Safe Star</Text>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Iniciar Sessão</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email ou Número de celular:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui"
              placeholderTextColor="#ccc"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={onCriarConta}>
              <Text style={styles.signupLink}> Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  formContainer: {
    width: '85%', padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 10
  },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: 15 },
  inputGroup: { marginBottom: 15 },
  label: { color: '#fff', marginBottom: 5, fontSize: 14 },
  input: {
    height: 40, backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5, paddingHorizontal: 10, color: '#fff'
  },
  button: {
    backgroundColor:'#1343c7', paddingVertical: 12,
    borderRadius: 5, alignItems: 'center', marginTop: 20
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  signupContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  signupText: { color: '#ddd', fontSize: 14 },
  signupLink: {
    color: '#e91010', fontSize: 14,
    fontWeight: 'bold', textDecorationLine: 'underline'
  },
});