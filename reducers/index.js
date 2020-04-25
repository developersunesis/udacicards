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
            const tempState = state

            state = {}

            keys.map((id) =>  {
                if(id !== action.deckId) {
                    state[id] = tempState[id]
                }
            })
            console.log(action.deckId)
            console.log(state)

            return state
            
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