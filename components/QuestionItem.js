import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import CardFlip from 'react-native-card-flip'

import { colorPrimary, white } from '../utils/colors'

export default class QuestionItem extends Component {

    render() {

        const { questionData } = this.props

        const { question, answer } = questionData

        return (
            <View style={styles.container}>
                <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.card}
                        onPress={() => this.card.flip()}>
                        <Text style={styles.label}>
                            {question}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.card, styles.answer]}
                        onPress={() => this.card.flip()}>
                        <Text style={styles.label}>
                            {answer}
                        </Text>
                    </TouchableOpacity>
                </CardFlip>

                <Text style={{color: 'lightgray', margin: 10}}>
                    Tap the card to flip between question and answer
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardContainer: {
        width: Math.round(Dimensions.get('window').width) - 70,
        minHeight: 200,
        alignContent: 'center',
    },
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        padding: 20,
        backgroundColor: colorPrimary,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        justifyContent: 'center'
    },
    answer : {
        backgroundColor : '#18b300'
    },
    label: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
