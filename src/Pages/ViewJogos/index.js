import React from 'react';
import { View } from 'react-native'; // 👈 IMPORTANTE!

import Footer from './Footer/Footer';
import TelaDownload from './Game/TelaDowload';
import Nav from './Nav/Nav';

export default function ViewJogos() {
  return (
    <View style={{ flex: 1 }}>
      <Nav />
      <TelaDownload />
      <Footer />
    </View>
  );
}

