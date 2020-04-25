import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { gray, colorPrimary, white } from '../utils/colors'

import QuestionItem from './QuestionItem'
import TheButton from './TheButton'

class TakeQuiz extends Component {

    state = {
        qIndex: 0,
        correct: 0,
        incorrect: 0
    }

    onClickedAnswered = (answer) => {
        const {
            qIndex,
            correct,
            incorrect
        } = this.state

        this.setState({
            qIndex: qIndex + 1,
            correct: answer ? correct + 1 : correct,
            incorrect: answer ? incorrect : incorrect + 1
        })
    }

    navigateTo = (name) => {
        if (name === 'TakeQuiz') {
            this.setState({
                qIndex: 0,
                correct: 0,
                incorrect: 0
            })
        }
        else {
            const { navigation } = this.props

            navigation.goBack()
            navigation.navigate(name, { deckId })
        }
    }

    render() {

        const { state } = this.props

        const { deckId } = this.props.route.params

        const { questions } = state[deckId]

        if (questions.length == 0) {

            return (
                <View style={[styles.container, { alignItems: "center" }]}>
                    <Text style={{ fontWeight: '100', fontSize: 22 }}>
                        Opps! You don't have any flashcards on this deck
                    </Text>

                    <TheButton style={{ marginTop: 30, backgroundColor: colorPrimary }}
                        innerColor={white} text="Add New Card"
                        onPress={() => this.navigateTo('AddCard')} />
                </View>
            )
        }

        if (this.state.qIndex > questions.length - 1) {

            return (
                <View style={[styles.container, { alignItems: "center" }]}>
                    <Text style={styles.heading}>
                        Score
                    </Text>
                    <Text>
                        <Text style={styles.heading}>
                            {this.state.correct}
                        </Text>
                        <Text style={{ fontWeight: '100', fontSize: 22 }}> of {questions.length}</Text>
                    </Text>
                    <View style={{ borderTopColor: gray, borderTopWidth: 1, marginTop: 50, paddingTop: 20 }}>
                        <Text style={[styles.heading, { color: 'darkgray' }]}>
                            Correct Answers : {this.state.correct}
                        </Text>
                        <Text style={[styles.heading, { color: 'darkgray' }]}>
                            Incorrect Answers : {this.state.incorrect}
                        </Text>
                    </View>

                    <TheButton style={{ marginTop: 10, borderColor: colorPrimary, borderWidth: 1 }} innerColor={colorPrimary} text="Take Quiz Again"
                        onPress={() => this.navigateTo('TakeQuiz')} />

                    <TheButton style={{ marginTop: 20, borderColor: 'darkgray', borderWidth: 1 }} innerColor='darkgray' text="Back to Deck"
                        onPress={() => this.props.navigation.goBack()} />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    <Text style={{ fontWeight: '100', fontSize: 25 }}>Question</Text> {this.state.qIndex + 1}
                    <Text style={{ fontWeight: '100', fontSize: 22 }}>of {questions.length}</Text>
                </Text>

                <QuestionItem questionData={questions[this.state.qIndex]} />

                <View style={{ borderTopColor: gray, borderTopWidth: 1, marginTop: 50, paddingTop: 20 }}>
                    <TheButton
                        style={{ backgroundColor: '#32a852', margin: 10 }}
                        innerColor={white} text="Correct"
                        onPress={() => this.onClickedAnswered(true)} />

                    <TheButton
                        style={{ backgroundColor: 'red', margin: 10 }}
                        innerColor={white} text="Incorrect"
                        onPress={() => this.onClickedAnswered(false)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center'
    },
    heading: {
        fontWeight: '700',
        alignSelf: 'center',
        margin: 20,
        fontSize: 35
    }
})

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(TakeQuiz)