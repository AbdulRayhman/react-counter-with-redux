const initialState ={
    results:[]
}
const resultReducer = (state = initialState,action )=>{
    switch (action.type) {
        case 'STORE_RESULT':
            return{
                ...state,
                results: state.results.concat({id: new Date(),value: action.count})
            }
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return{
                ...state,
                results: updatedArray
            }
        default:
            break;
        
    }
    return state;
};
export default resultReducer;