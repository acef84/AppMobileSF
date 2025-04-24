import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import Nav from '../Nav';

const jogos = [
    { id: '1', nome: 'Cuphead' },
    { id: '2', nome: 'Celeste' },
    { id: '3', nome: 'Heades' },
    { id: '4', nome: 'Oxenfree' },
    { id: '5', nome: 'Journey' },
    { id: '6', nome: 'Hollow Knight' },
];

export default function Main({ searchQuery, setSearchQuery, isFocused, setIsFocused }) {
    const filteredJogos = jogos.filter(jogo =>
        jogo.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <Nav setSearchQuery={setSearchQuery} isFocused={isFocused} setIsFocused={setIsFocused} />
            <View style={styles.content}>
                {searchQuery.length > 0 ? (
                    <FlatList
                        data={filteredJogos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.jogoItem}>
                                <Text style={styles.jogoNome}>{item.nome}</Text>
                            </View>
                        )}
                        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum jogo encontrado.</Text>}
                    />
                ) : (
                    <Text style={styles.emptyText}>Digite algo para buscar jogos</Text>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#950000',
        paddingTop: 100,
    },
    content: {
        flex: 1,
        padding: 20,
        marginTop: 80,
    },
    jogoItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    jogoNome: {
        fontSize: 18,
        color: '#fff',
    },
    emptyText: {
        fontSize: 16,
        color: '#c3c3c3',
        textAlign: 'center',
        marginTop: 200,
    },
});
