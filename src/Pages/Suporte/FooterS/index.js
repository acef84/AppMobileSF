import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function FooterS(){
    return(
        <View style ={styles.container}>
            <Image style={styles.fobia} source={require('../../../../assets/homeWhite.png')} />
            <Image style={styles.fobia} source={require('../../../../assets/lojaWhite.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#a7010b'
    },
})