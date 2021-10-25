
const initialState = [
    {
        id:0,
        name : "Tohid",
        email : "tohid@gmail.com",
        number : 1234
    },
    {
        id:1,
        name : "Hasan",
        email : "hasan@gmail.com",
        number : 12345
    },
    {
        id:2,
        name : "Asraf",
        email : "asraf@gmail.com",
        number : 123456
    }
]


const contactReducer = (state = initialState, action)=> {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;

        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id? action.payload : contact);
            state = updateState;
            return state;

        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;

        default:
            return state
    }
}

export default contactReducer;