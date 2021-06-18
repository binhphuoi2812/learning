const InitState = {
    counter: 10000000000000,
}
const counterReducer = (state = InitState , action )=>{
    switch(action.type){
        case 'INCREMENT_COUNT':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'INCREMENT_COUNT_TEN':
            return {
                ...state,
                counter: state.counter + 10
            }
        case 'INCREMENT_SUB_TEN':
            return{
                 ...state,
            counter: state.counter -10
            }
        case 'INCREMENT_SUB':
            return{
                ...state,
                counter:state.counter -1
            }
        default:
            return state;
    }
}

export default counterReducer;