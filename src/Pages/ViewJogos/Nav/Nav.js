import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Nav = () => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.logo}>
        <Image style={styles.icon} source={require('../../../../assets/safeStar.png')} />
      </View>
      <View style={styles.icons}>
        <Image style={styles.icon} source={require('../../../../assets/notificacoes.png')} />
        <Image style={styles.icon} source={require('../../../../assets/loja.png')} />
        <Image style={styles.icon} source={require('../../../../assets/minhaConta.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    backgroundColor: '#750000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    position: 'relative', // Use position: 'relative' em vez de position: 'absolute'
    top: 23,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logo: {},
  icon: {
    width: 30,
    height: 30,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    width: '50%',
    alignItems: 'center',
  },
});

export default Nav;