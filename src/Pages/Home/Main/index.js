import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { ScrollView } from "react-native";

const PrimeiraTela = ({ navigation }) => {
    return (
      <View>
        <Text>Primeira Tela</Text>
        <Button
          title="Ir para a Segunda Tela"
          onPress={() => navigation.navigate('SegundaTela')}
        />
      </View>
    );
  };

export default function Main(){
    return (
    <ScrollView>
        <View style={styles.Novidade}>
            <View style={styles.capaFobia}>
                <Image style={styles.fobia} source={require('../../../../assets/fobia.png')} />
            </View>
            <View style={styles.gamesDestaques}>
                <View style={styles.bannersDestaques}>
                    <Image style={styles.outroNome} source={require('../../../../assets/layers.png')} />
                    <Image style={styles.outroNome} source={require('../../../../assets/outlast.png')} />
                </View>
                <View style={styles.segundo}>
                    <Image style={styles.destaque01} source={require('../../../../assets/bloober.jpg')} />
                    <Text style={styles.nameGame}>Layers Of Fear</Text>
                    <Image style={styles.outroNomeMini} source={require('../../../../assets/RedBarrels.jpg')} />
                    <Text style={styles.nameGame}>Fobia - Pulsatrix Studi</Text>
                </View>
            </View>
            <View style={styles.jogos}>
                <View style={styles.containerFobia}>
                    <View style={styles.capaTitulo}>
                        <Image style={styles.capa} source={require('../../../../assets/cuphead.png')} />
                        <Text style={styles.colorCapa}>Cuphead</Text>
                    </View>
                    <View style={styles.capaTitulo}>
                        <Image style={styles.capa} source={require('../../../../assets/celeste4.png')} />
                        <Text style={styles.colorCapa}>Celeste</Text>
                    </View>
                    <View style={styles.capaTitulo}>
                        <Image style={styles.capa} source={require('../../../../assets/hades4.png')} />
                        <Text style={styles.colorCapa}>Hades</Text>
                    </View>
                    <View style={styles.capaTitulo}>
                        <Image style={styles.capa} source={require('../../../../assets/oxenfree.png')} />
                        <Text style={styles.colorCapa}>Oxenfree</Text>
                    </View>
                    <View style={styles.capaTitulo}>
                        <Image style={styles.capa} source={require('../../../../assets/journey.png')} />
                        <Text style={styles.colorCapa}>Journey</Text>
                    </View>
                    <View style={styles.capaTitulo}>
                        <Image style={styles.capa} source={require('../../../../assets/knight.png')} />
                        <Text style={styles.colorCapa}>Hollow Knight</Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerFobia: {

    },
    classificaoEtaria: {
        flexDirection: 'row'
    },
    capaTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#3d0600',
        marginRight: 10,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    colorCapa: {
        color: 'white'
    },
    capa: {
        width: 120,
        height: 60,
        borderRadius: 0,
        marginTop: 5,
    },
    jogos: {
        backgroundColor: '#800000',
        paddingLeft: 10,
        paddingBottom: 30
    },
    bannersDestaques: {
        flexDirection: 'row',
    },

    segundo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginRight: '50%'
    },

    nameGame: {
        color: 'white',
        marginRight: '20%',
        marginTop: 15,
    },

    outroNomeMini: {
        height: 22,
        width: 50,
        borderRadius: 15,
        marginLeft: 3,
        marginTop: 15,
    },

    destaque01: {
        height: 25,
        width: 50,
        borderRadius: 15,
        marginLeft: 7,
        marginTop: 15,
    },

    outroNome: {
        height: 120,
        width: 200,
        borderRadius: 15,
        marginLeft: 7,
        marginTop: 5,
    },

    textoDestaques: {
        color: 'white',
        fontSize: 20,
        paddingLeft: '2%',
        paddingTop: '2%'
    },

    gamesDestaques: {
        backgroundColor: '#320103',
        height: '16%',
        borderRadius: 5,
        marginTop: 5
    },

    capaFobia: {
        alignItems: 'center',
        paddingTop: 5
    },

    fobia: {
        width: 400,
        height: 240,
        borderRadius: 15
    },

    Novidade: {
        color: 'black',
        backgroundColor: '#750000',
        marginTop: '21%',
        paddingTop: 10,
        height: '100%',
    },

    destaque: {
        color: 'white',
        marginRight: '70%',
        fontSize: 20
    },

    container: {
        backgroundColor: '#750000',
        width: '100%',
        height: '100%',
        
        //backgroundColor: '#610000',
        //paddingTop: '5%',
        //paddingBottom: '95%',
        //paddingLeft: '10',
        //paddingRight: '10',
        
    },

    /*fobia: {
        width: '95%',
        height: '92%',
        borderRadius: 15,
    },*/

    contFobia: {
        marginTop: '32%',
        marginBottom: 500,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//<Image source={require('../../../assets/favicon.png')} />