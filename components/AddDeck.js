import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, colorPrimary, white } from '../utils/colors'
import { addDeckTitle } from '../utils/API'
import { addEntry } from '../actions'

class AddDeck extends Component {
    
    state = {
        title : '',
        hasError : false
    }

    addDeck = () => {
        const title = (this.state.title).trim()

        this.setState({hasError : title.length === 0})

        if(title.length > 0){
            
            this.setState({title : ''})

            const { titleId, deck} = addDeckTitle(title)

            this.props.dispatch(addEntry(deck))

            this.props.navigation.navigate('DeckView', { 
                deckId : titleId,
                deck : deck[titleId]
            })

        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Let's Add a New Deck </Text>

                {this.state.hasError && <Text style={{color: 'red', marginLeft: 30}}>Please enter a deck name</Text>}

                <TextInput style={styles.textinput} placeholder="Enter deck title" selectionColor={colorPrimary} 
                  onChange={({nativeEvent}) => this.setState({title: nativeEvent.text})} value={this.state.title}/>

                <TouchableOpacity style={styles.addDeck} onPress={this.addDeck}>
                    <Text style={{textAlign : 'center', color: white, fontSize: 17, fontWeight: '700', textTransform: 'uppercase'}}>
                        Create Deck
                    </Text>
                </TouchableOpacity>
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
    title : {
        width: '100%',
        textAlign: "center",
        fontSize: 30,
        color: colorPrimary,
        fontWeight: '700',
        marginBottom: 20
    },
    textinput : {
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 4,
        margin: 20,
        paddingLeft: 15,
        fontSize: 17
    },
    addDeck : {
        marginLeft: 20,
        marginRight: 20,
        padding: 17,
        borderRadius: 4,
        justifyContent: "center",
        backgroundColor: colorPrimary
    }
})

function mapStateToProps (state) {

    return {
        state
    }
}

export default connect(mapStateToProps)(AddDeck)