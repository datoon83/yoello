export const cartInitialState = {
    items: [],
    total: 0,
}

export const cart = (state, action) => {
    if(action.type === 'add_to_cart') {
        const found = state.items.find(x => x.id === action.beer.id)
        if(found) {
            ++found.count
            return {
                items: [...state.items],
                total: calculateTotal(state.items)
            }
        } 
        const items = [ ...state.items, { ...action.beer, count: 1 }]
        return {
            items,
            total: calculateTotal(items)
        }
    }
    if(action.type === 'remove_from_cart') {
        const items = state.items.filter(x => x.id !== action.beer.id)
        return { 
            items,
            total: calculateTotal(items)
        }
    }
}

const calculateTotal = items => {
    return items.reduce((acc, item) => { 
        acc += item.abv * item.count
        return acc
    }, 0)
}