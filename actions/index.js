export const RECEIVE_DECK_ENTRIES = 'RECEIVE_DECK_ENTRIES'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDeckEntries (entries) {
    return {
        type: RECEIVE_DECK_ENTRIES,
        entries,
    }
}

export function addEntry (entry) {
    return {
        type: ADD_DECK,
        entry,
    }
}

export function deleteDeckEntry(deckId) {
    return {
        type: DELETE_DECK,
        deckId,
    }
}

export function addCardEntry (entry) {
    return {
        type: ADD_CARD,
        entry,
    }
}