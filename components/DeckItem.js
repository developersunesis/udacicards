import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { colorPrimary, white } from '../utils/colors'

export default function DeckItem({ deck, onPress }) {
    
    const { title, questions } = deck
    const count = questions.length

    return (
        <View style={styles.card}>
            <TouchableHighlight
            onPress={onPress}>
                <LinearGradient
                    colors={[colorPrimary, '#24a0ed']}
                    style={{
                        padding: 15,
                        justifyContent: "center",
                        borderRadius: 7,
                        height: '100%'}}>

                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <Text style={{color: white, fontSize: 16}}>
                        {count} {count > 1 ? 'flashcards' : 'flashcard'}
                    </Text>

                </LinearGradient>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: white,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20,
        shadowColor: '0 4px 8px 0 rgba(0,0,0,0.2)',
        minHeight: 100,
        flex: 1,
    },
    title : {
        fontSize : 24,
        color: white,
        fontWeight: '700',
        marginBottom: 10
    }
})