import { RECEIVE_DECK_ENTRIES, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions'

function entries (state = {}, action){

    switch(action.type) {
        case RECEIVE_DECK_ENTRIES:

            return {
                ...state,
                ...action.entries
            }

        case ADD_DECK:

            return {
                ...state,
                ...action.entry
            }

        case DELETE_DECK: 
            
            const keys = Object.keys(state)
            
            const newState = Array()

            keys.map((id) =>  {
                id !== action.deckId && newState.push(state[id])
            })

            return {
                ...newState
            }

        case ADD_CARD: 

            const { key, questions } = action.entry
            const title = state[key].title

            return {
                ...state,
                [key] : {
                    title,
                    questions
                }
            }
            
        default: 
            return state
    }
}

export default entries