
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './Main';
import Footer from './Footer';

export default function TelaDePesquisa() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Main 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
      {/*
      <Footer 
        isFocused={isFocused} 
        searchQuery={searchQuery} 
      />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
