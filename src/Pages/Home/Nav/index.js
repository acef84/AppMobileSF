import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Nav() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.outroNomeMini} source={require('../../../../assets/safeStar.png')} />
            </View>
            <View style={styles.icones}>
                <TouchableOpacity onPress={() => navigation.navigate('Pesquisa')}>
                    <Image 
                        style={styles.outroNomeMini} 
                        source={require('../../../../assets/pesquisar.png')} 
                    />
                </TouchableOpacity>
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
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingTop: 40,
        elevation: 5, // Sombra para Android
        shadowColor: '#000', // Cor da sombra para iOS
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.2, // Opacidade da sombra
        shadowRadius: 2, // Raio do blur da sombra
    },
    logo: {
        backgroundColor: 'red'
    },
    outroNomeMini: {
        width: 30,
        height: 30
    },
    icones: {
        flexDirection: 'row', // Garante que os ícones fiquem lado a lado
        justifyContent: 'flex-end',
        gap: 20,
        width: '50%', // Faz os ícones ocuparem 50% da largura disponível
        alignItems: 'center', // Alinha os ícones verticalmente ao centro
        paddingLeft: '0'

    }
});
