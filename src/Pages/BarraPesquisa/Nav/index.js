import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

export default function Nav({ setSearchQuery, isFocused, setIsFocused }) {

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.outroNomeMini} source={require('../../../../assets/safeStar.png')} />
            </View>
            <View style={styles.icones}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar jogos..."
                    placeholderTextColor="#fff"
                    onChangeText={setSearchQuery}
                    onFocus={() => setIsFocused(true)} // Atualiza o estado de foco para true
                    onBlur={() => setIsFocused(false)}  // Atualiza o estado de foco para false ao sair do campo
                    underlineColorAndroid="transparent"
                    selectionColor="#FF0000"
                    keyboardType="default" // Aqui, você pode especificar o tipo de teclado que deseja (caso contrário, o padrão é numérico)
                />
                {!isFocused && (
                    <Image style={styles.searchIcon} source={require('../../../../assets/pesquisar.png')} />
                )}
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
        position: 'absolute',
        elevation: 10,
        paddingTop: 50,
        zIndex: 10,
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
        alignItems: 'center',
        width: '90%',
    },
    searchInput: {
        backgroundColor: '#FF0000',
        height: 40,
        paddingHorizontal: 15,
        borderRadius: 5,
        fontSize: 18,
        flex: 1,
    },
    searchIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
});
