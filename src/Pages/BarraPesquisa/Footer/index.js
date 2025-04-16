import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Footer({ isFocused, searchQuery }) {
    return (
        <View style={styles.container}>
            {/* Exibe as imagens apenas quando o campo não está focado e a pesquisa está vazia */}
            {!(isFocused || searchQuery.length > 0) && (  // Só exibe as imagens quando não estiver focado e não houver texto na pesquisa
                <>
                    <Image style={styles.fobia} source={require('../../../../assets/homeWhite.png')} />
                    <Image style={styles.fobia} source={require('../../../../assets/lojaWhite.png')} />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: '#750000',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    fobia: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
    },
});