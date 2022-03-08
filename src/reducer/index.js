import orderBy from 'lodash/orderBy';

//Valor por defecto cuando se inicia, tiene una lista Vacia
const initialValue = {
    items: [],
    filtered: false,
    filteredItems: []
};

const reducer = (state = initialValue, action) => {

    switch (action.type) {

        case 'ADD_ITEM':
            return {
                ...state,
                filtered: false,
                items: [...state.items, action.payload]
            }

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload)
            }

        case 'EDIT_ITEM':
            const editData = state.items.map(i => (
                i.id === action.payload.id ?
                    { ...i, priority: action.payload.priority, status: action.payload.status } : i
            ));
            return {
                ...state,
                items: editData
            }

        case 'FILTER_ALL':
            return {
                ...state,
                filtered: true,
                filteredItems: state.items
            }

        case 'FILTER_BY_STATUS':
            debugger
            return {
                ...state,
                filtered: true,
                filteredItems: state.items.filter(i => i.status === action.payload)
            }

        case 'FILTER_BY_PRIORITY':
            debugger
            return {
                ...state,
                filtered: true,
                filteredItems: state.items.filter(i => i.priority === action.payload)
            }

        case 'ORDER_BY_STATUS':
            const order = orderBy(state.items, ['status'], [action.payload]);
            return {
                ...state,
                items: order
            }

        default:
            return state
    }
}

export default reducer;