import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.icon} source={require('../../../../assets/homeWhite.png')} />
      <Image style={styles.icon} source={require('../../../../assets/loja.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#a7010b',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
export default Footer;
