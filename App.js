import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Footer from './src/Pages/BarraPesquisa/Footer';
import Main from './src/Pages/BarraPesquisa/Main';
import Nav from './src/Pages/BarraPesquisa/Nav';

export default function App() {
    const [searchQuery, setSearchQuery] = useState(""); // Estado para a pesquisa
    const [isFocused, setIsFocused] = useState(false); // Estado para controlar se o campo está focado

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Nav
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                />
                <Main searchQuery={searchQuery} />
            </SafeAreaView>
            <Footer
                isFocused={isFocused}
                searchQuery={searchQuery}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});