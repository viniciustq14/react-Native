import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native';

class topo extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Jogo de Domingo
                    </Text>

                </View>
                <View>
                    <TouchableHighlight>
                        <Text>
                            Jogadores
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text>
                            Dias de Jogos Anteriores
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
}

module.exports = topo