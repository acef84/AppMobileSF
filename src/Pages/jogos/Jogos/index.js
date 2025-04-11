import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const jogosAcao = [
  { id: '1', nome: 'Hades', imagem: require('../../../../assets/hades.png') },
  { id: '2', nome: 'Cuphead', imagem: require('../../../../assets/cuphead.jpg') },
  { id: '3', nome: 'Celeste', imagem: require('../../../../assets/celeste.jpg') },
];

const jogosAventura = [
  { id: '4', nome: 'Hollow Knight', imagem: require('../../../../assets/hollowknight.jpg') },
  { id: '5', nome: 'Journey', imagem: require('../../../../assets/journey.png') },
  { id: '6', nome: 'Oxenfree', imagem: require('../../../../assets/oxenfree.png') },
];

const jogosTerror = [
  { id: '7', nome: 'Outlast', imagem: require('../../../../assets/outlast.jpg') },
  { id: '8', nome: 'Layers Of Fear', imagem: require('../../../../assets/layersoffear.png') },
  { id: '9', nome: 'Fobia', imagem: require('../../../../assets/fobia.png') },
];

function Jogos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nossos Jogos</Text>
      <View style={styles.categoriaContainer}>
        <Text style={styles.subtitulo}>Ação</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jogosScrollView}>
          {jogosAcao.map((jogo) => (
            <TouchableOpacity key={jogo.id} style={styles.jogoItem} onPress={() => console.log(`Jogo ${jogo.nome} clicado`)}>
              <Image source={jogo.imagem} style={styles.jogoImagem} />
              <Text style={styles.jogoNome}>{jogo.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.categoriaContainer}>
        <Text style={styles.subtitulo}>Aventura</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jogosScrollView}>
          {jogosAventura.map((jogo) => (
            <TouchableOpacity key={jogo.id} style={styles.jogoItem} onPress={() => console.log(`Jogo ${jogo.nome} clicado`)}>
              <Image source={jogo.imagem} style={styles.jogoImagem} />
              <Text style={styles.jogoNome}>{jogo.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.categoriaContainer}>
        <Text style={styles.subtitulo}>Terror</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jogosScrollView}>
          {jogosTerror.map((jogo) => (
            <TouchableOpacity key={jogo.id} style={styles.jogoItem} onPress={() => console.log(`Jogo ${jogo.nome} clicado`)}>
              <Image source={jogo.imagem} style={styles.jogoImagem} />
              <Text style={styles.jogoNome}>{jogo.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 110,
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    alignSelf: 'center',
  },
  categoriaContainer: {
    width: '100%',
    marginTop: 20, // Adiciona espaço entre as categorias
  },
  subtitulo: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 5,
  },
  jogosScrollView: {
    marginTop: 10,
  },
  jogoItem: {
    width: 150,
    marginRight: 10,
  },
  jogoImagem: {
    width: '100%',
    height: 150,
    borderRadius: 10, // Adiciona bordas arredondadas
  },
  jogoNome: {
    color: '#ffffff',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16, // Aumenta o tamanho da fonte
    fontWeight: '500', // Adiciona um peso de fonte médio
  },
});

export default Jogos;