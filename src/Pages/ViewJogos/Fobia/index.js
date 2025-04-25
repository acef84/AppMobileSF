export * from './Game/TelaDowload';
export * from './Nav/Nav';

import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Nav from './Nav/Nav';
import TelaDownload from './Game/TelaDowload';

export default function TelaFobia() {
  return (
    <View style={styles.container}>
      <ScrollView>       
        <Nav />
        <TelaDownload />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#750000',
    justifyContent: 'center',
  },
});