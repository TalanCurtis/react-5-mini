// setting default state
const initialState = { 
    currentValue: 0,
    futureValues:[],
    previousValues:[]
};

// Action Types
const INCREMNET = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

// Main Body of reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMNET:
            return { 
                currentValue: state.currentValue + action.amount,
                futureValues:[],
                previousValues:[state.currentValue, ...state.previousValues]

            };
        case DECREMENT:
            return { 
                currentValue: state.currentValue - action.amount,
                futureValues:[],
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case UNDO:
            return{
                currentValue: state.previousValues[0],
                futureValues:[state.currentValue, ...state.futureValues],
                previousValues:state.previousValues.slice(1, state.previousValues.length)
            }
        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues:state.futureValues.slice(1, state.futureValues.length ),
                previousValues: [state.currentValue, ...state.previousValues]

            }
        default:
            return state;
    }
}


// Action Creators
export function increment(amount) {
    return {
        type: INCREMNET,
        amount
    }
}
export function decrement(amount) {
    return {
        type: DECREMENT,
        amount

    }
}
export function redo(){
    return{
        type: REDO
    }
}
export function undo(){
    return{
        type:UNDO
    }
}


