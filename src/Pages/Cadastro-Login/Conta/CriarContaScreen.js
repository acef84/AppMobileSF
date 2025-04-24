import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function CriarContaScreen({ onContaCriada, onVoltarParaLogin }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegistrar = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      alert('Preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      alert('Email inválido.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    // Simulação de criação de conta bem-sucedida
    console.log('Conta criada com sucesso!');
    onContaCriada();
  };

  return (
    <LinearGradient colors={['#8b0000', '#300000']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Criar Conta</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome completo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#ccc"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
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
              placeholder="Digite sua senha"
              placeholderTextColor="#ccc"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              placeholderTextColor="#ccc"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegistrar}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={onVoltarParaLogin}>
              <Text style={styles.signupLink}> Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  formContainer: {
    width: '85%', backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20, borderRadius: 15
  },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  inputGroup: { marginBottom: 15 },
  label: { color: '#fff', marginBottom: 5, fontSize: 14 },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.11)', height: 45,
    borderRadius: 8, paddingHorizontal: 10, color: '#fff'
  },
  button: {
    backgroundColor: '#1E3A8A', paddingVertical: 12,
    borderRadius: 8, alignItems: 'center', marginTop: 20
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  signupContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 15 },
  signupText: { color: '#ddd', fontSize: 14 },
  signupLink: { color: '#e91010', fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline' },
});