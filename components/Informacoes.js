'use strict'

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icone from './Icone';

class Informacoes extends Component {
  render() {
    return (
      <View style={styles.painelAcoes}>
        <Text style={styles.placar}>Placar: Usuario {this.props.countUser} | Computador {this.props.countPc}</Text>
        <Text style={styles.resultado}>{this.props.resultado}</Text>
        <Icone escolha={this.props.escolhaUsuario} jogador={'Usuario'}></Icone>
        <Icone escolha={this.props.escolhaComputador} jogador={'Computador'}></Icone>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  resultado: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'red',
    height: 30
  },
  placar: {
    fontSize: 18.5,
    fontWeight: 'bold',
    color: 'blue'
  },
  painelAcoes: {

    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default Informacoes