import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";

export default function Footer(){
  return(
    <View style ={styles.container}>
      <Image style={styles.fobia} source={require('../../../../assets/homeWite.png')} />
      <Image style={styles.fobia} source={require('../../../../assets/lojaWhite.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#A7010B'
  },
})