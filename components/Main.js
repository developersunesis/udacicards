import React, { Component } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import { fetchDeckResults, scheduleNotification } from '../utils/API'
import { receiveDeckEntries } from '../actions'

import DeckItem from './DeckItem'

class Main extends Component {

    componentDidMount() {

        scheduleNotification()
        
        const { dispatch } = this.props

        fetchDeckResults()
            .then((data) => {
                dispatch(receiveDeckEntries(data))
            })
    }
    
    openDeck = (id, deck) => {
        this.props.navigation.navigate('DeckView', {
            deckId: id,
            deck
        })
    }

    render() {

        const { decks, data } = this.props
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <FlatList
                        data={decks}
                        renderItem={({ item }) => {
                            const deck = data[item]
                            return <DeckItem deck={deck} onPress={() => this.openDeck(item, deck)} />
                        }
                        }
                        keyExtractor={item => item}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
})

function mapStateToProps(state) {

    return {
        data: state,
        decks: Object.keys(state).reverse()
    }
}

export default connect(mapStateToProps)(Main)