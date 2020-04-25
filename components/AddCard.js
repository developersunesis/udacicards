import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, colorPrimary, white } from '../utils/colors'
import { addCardToDeck } from '../utils/API'
import { addCardEntry } from '../actions'
import entries from '../reducers'

class AddCard extends Component {

    state = {
        question : '',
        answer : '',
        hasError: [
            false, false
        ]
    }

    addCard = () => {
        const question = this.state.question.trim();
        const answer = this.state.answer.trim();

        this.setState({
            hasError : [
                question.length === 0,
                answer.length === 0
            ]
        })

        if(question.length > 0 && answer.length > 0){

            const { state, route, dispatch } = this.props

            const deckId = route.params.deckId

            const questions = state[deckId].questions

            questions.push(
                {question, answer}
            )

            const entry = {
                key : deckId,
                entries : {
                    ...state[deckId],
                    questions
                }
            }

            addCardToDeck(entry)

            dispatch(addCardEntry({key : deckId, questions}))

            this.setState({
                question: '',
                answer : ''
            })

            this.props.navigation.goBack()
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Let's Add a New Card </Text>

                {this.state.hasError[0] && <Text style={{color: 'red', marginLeft: 30}}>Please enter your question</Text>}

                <TextInput style={styles.textinput} placeholder="Enter Question" selectionColor={colorPrimary} value={this.state.question} 
                onChange={({nativeEvent}) => this.setState({question: nativeEvent.text})}/>

                {this.state.hasError[1] && <Text style={{color: 'red', marginLeft: 30}}>Please enter your answer</Text>}

                <TextInput style={styles.textinput} placeholder="Enter Answer" selectionColor={colorPrimary} value={this.state.answer}
                onChange={({nativeEvent}) => this.setState({answer: nativeEvent.text})}/>

                <TouchableOpacity style={styles.addDeck}  onPress={this.addCard}>
                    <Text style={{textAlign : 'center', color: white, fontSize: 17, fontWeight: '700', textTransform: 'uppercase'}}>
                        Add Flashcard
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

export default connect(mapStateToProps)(AddCard)