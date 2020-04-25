import React, { Component } from 'react'

import { StyleSheet, View, Text } from 'react-native'

import { connect } from 'react-redux';

import TheButton from './TheButton'

import { deleteDeckEntry } from '../actions'

import { gray, colorPrimary, white } from '../utils/colors'

import { deleteDeck, clearLocalNotification } from '../utils/API'


class DeckView extends Component {

    deleteThisDeck = (deckId) => {
        
        this.props.navigation.goBack()
        
        deleteDeck(deckId);
        
        this.props.dispatch(deleteDeckEntry(deckId))
    }

    render() {

        const { deckId } = this.props.route.params

        const { navigation, state } = this.props

        if(state[deckId] === undefined){
            // Deck was deleted
            return (<View></View>)
        }

        const { title, questions } = state[deckId]

        const count = questions === undefined ? 0 : questions.length

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={[styles.title, { color: gray, fontSize: 20 }]}>
                    {count} {count > 1 ? 'flashcards' : 'flashcard'}
                </Text>

                <TheButton style={{ marginTop: 30, backgroundColor: colorPrimary }} 
                innerColor={white} text="Add New Card" 
                onPress={() => navigation.navigate('AddCard', { deckId })}/>

                <TheButton style={{ marginTop: 10, borderColor: colorPrimary, borderWidth: 1 }} innerColor={colorPrimary} text="Take Quiz" 
                onPress={() => {
                    // cancel today's notification
                    clearLocalNotification()
                    
                    navigation.navigate('TakeQuiz', { deckId })
                }}/>

                <View style={{borderTopColor: gray, borderTopWidth: 1, marginTop: 20, paddingTop: 20}}>
                    <TheButton style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }} innerColor='red' text="Delete this deck" onPress={() => this.deleteThisDeck(deckId)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 7,
        paddingTop: '40%'
    },
    title: {
        width: '100%',
        textAlign: "center",
        fontSize: 35,
        color: colorPrimary,
        fontWeight: '700',
        marginBottom: 20
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        padding: 17,
        borderRadius: 4,
        justifyContent: "center",
        marginBottom: 20
    }
})

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(DeckView)