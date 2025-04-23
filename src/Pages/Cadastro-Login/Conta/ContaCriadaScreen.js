import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function ContaCriadaScreen({ onOK }) {
  return (
    <LinearGradient colors={['#8b0000', '#300000']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.box}>
          <Text style={styles.emoji}>🎉</Text>
          <Text style={styles.title}>Conta Criada!</Text>
          <Text style={styles.message}>
            Seja bem-vindo(a) à Safe Star!{'\n'}Sua conta foi criada com sucesso.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={onOK}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'red' },
  safeArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.11)', padding: 30,
    borderRadius: 20, alignItems: 'center', width: '85%'
  },
  emoji: { fontSize: 50, marginBottom: 10 },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 10 },
  message: { color: '#fff', fontSize: 16, textAlign: 'center', marginBottom: 25 },
  button: { backgroundColor: '#1E3A8A', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});