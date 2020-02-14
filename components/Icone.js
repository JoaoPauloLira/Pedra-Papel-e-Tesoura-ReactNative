'use strict'

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Icone extends Component {
  render() {
    if (this.props.escolha === '')
      return false

    const escolha = this.props.escolha

    switch (escolha) {
      case 'Papel': return (
        <View style={styles.painelAcoes}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../img/Papel.png')} />
        </View>
      )
      case 'Pedra': return (
        <View style={styles.painelAcoes}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../img/Pedra.png')} />
        </View>
      )
      case 'Tesoura': return (
        <View style={styles.painelAcoes}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../img/Tesoura.png')} />
        </View>
      )
    }
  }
}

const styles = {

  painelAcoes: {

    alignItems: 'center',
    justifyContent: 'center',
  }
}
export default Icone