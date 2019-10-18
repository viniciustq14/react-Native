import React from 'react';
import {
    View, Text, TouchableHighlight, Components
} from 'react-native';

class topo extends Components {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Pelada de Domingo
                </Text>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text>
                            Lista de Jogadores
                    </Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text>Lista de Jogos</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

}

module.exports = topo;