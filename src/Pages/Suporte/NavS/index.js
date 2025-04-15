import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function NavS() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.outroNomeMini} source={require('../../../../assets/safeStar.png')} />
      </View>
      <View style={styles.icones}>
        <Image style={styles.outroNomeMini} source={require('../../../../assets/notificacoes.png')} />
        <Image style={styles.outroNomeMini} source={require('../../../../assets/pesquisar.png')} />
        <Image style={styles.outroNomeMini} source={require('../../../../assets/minhaConta.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#750000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    elevation: 10,
    paddingTop: 50,
  },
  logo: {
    backgroundColor: 'red',
  },
  outroNomeMini: {
    width: 30,
    height: 30,
  },
  icones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    width: '50%',
    alignItems: 'center',
    paddingLeft: '0',
  },
});