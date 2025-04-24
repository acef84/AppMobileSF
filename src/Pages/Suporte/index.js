export * from './Dicas';
export * from './Forms';
export * from './Header';
export * from './NavS';
export * from './FooterS'

import React from 'react';
import { ScrollView, View } from 'react-native'
import { StyleSheet } from 'react-native';
import NavS from './NavS';
import Header from './Header';
import Forms from './Forms';
import FooterS from './FooterS';
import Dicas from './Dicas';

export default function TelaSuporte(){
    return(
        <View style={styles.container}>
            <ScrollView>
            <NavS/>
            <Header/>
            <Forms/>
            <Dicas/>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#750000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });