'use strict'

import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

class Botoes extends Component {
    render() {
        return (
            <View style={styles.painelAcoes}>
                <View style={styles.botao}>
                    <Button title="Pedra" onPress={() => { this.props.funcao('Pedra') }} />
                </View>
                <View style={styles.botao}>
                    <Button title="Papel" onPress={() => { this.props.funcao('Papel') }} />
                </View>
                <View style={styles.botao}>
                    <Button title="Tesoura" onPress={() => { this.props.funcao('Tesoura') }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    painelAcoes:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botao: {
        width: 100,
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 1,
        marginTop: 27,
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      },
      textoBotao:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
      }
})

export default Botoes