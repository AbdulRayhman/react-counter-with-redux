const initialState ={
    counter:0
}
const counterReducer = (state = initialState,action )=>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter+1
            }  
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter-1
            } 
        case 'ADD':
            return{
                ...state,
                counter: state.counter+action.value
            }
        case 'SUBTRACT':
            return{
                ...state,
                counter: state.counter-action.value
            }
        default:
            break;
        
    }
    return state;
};
export default counterReducer;