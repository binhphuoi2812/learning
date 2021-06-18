// const InitState = {
//     counter: 10000000000000,
// }

    const InitState = [
        {
            id: "Albert B Oliphant123",
            name: "122 Drainer Avenue",
            hobby: "712-341-8415"
        },
        {
            id: "Sharon E Garcia",
            name: "540 Jacobs Street",
            hobby: "412-240-3536"
        },
        {
            id: "David H Olmos",
            name: "329 Emily Renzelli Boulevard",
            hobby: "831-636-9428"
        },
        {
            id: "George L Pedroza",
            name: "287 Robinson Lane",
            hobby: "740-210-2950"
        },
        {
            id: "Jose A Goforth",
            name: "1161 Stoney Lane",
            hobby: "972-933-9459"
        }

    ]


   

const ListPersonReducer = (state = InitState , action )=>{
    switch(action.type){
       
        case 'ADD_PERSON':
            return [...state, action.payload];
        case 'DELETE_PERSON':
            return state = state.filter(item => item.id !=action.payload);
        case 'EDIT_PERSON':
        
        let newState = [...state] 
        for(var i = 0  ; i < newState.length; i++){
            if(newState[i].id === action.payload.id ){
                  newState[i].name = action.payload.name;
                  newState[i].hobby = action.payload.hobby; 
            }
        }
        return newState;
        default:
            return state;

            // let newState = [...state];
            // // if id === id => update newState[i].name, newSatte[i].hobby
            // return newState;
    }
}

export default ListPersonReducer;