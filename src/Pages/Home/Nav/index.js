import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Nav() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.outroNomeMini} source={require('../../../../assets/safeStar.png')} />
            </View>
            <View style={styles.icones}>
                <Image style={styles.outroNomeMini} source={require('../../../../assets/notificacoes.png')} />
                <Image style={styles.outroNomeMini} source={require('../../../../assets/pesquisar.png')} />
                <Image style={styles.outroNomeMini} source={require('../../../../assets/minhaConta.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#750000',
        flexDirection: 'row', // Alinha ícones na mesma linha
        justifyContent: 'space-between', // Espaço entre o ícone "star" e o grupo de ícones
        alignItems: 'center', // Alinha os ícones verticalmente ao centro
        paddingHorizontal: 10, // Adiciona um pequeno espaço nas laterais
        paddingVertical: 20, // Adiciona um pouco de espaço vertical
        position: 'absolute', // Posiciona a barra de navegação no topo
        elevation: 10,
        paddingTop: 50,
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
