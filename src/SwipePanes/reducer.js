export const panesInitialState = {
    activeIndex: 0,
    maxPanes: 2
}

export const swipePanes = (state, action) => {
    switch(action.type) {
        case "right": {
            if(state.activeIndex === state.maxPanes)
                return { ...state, activeIndex: state.activeIndex }
            else
                return { ...state, activeIndex: state.activeIndex + 1 }
        }
        case "left": {
            if(state.activeIndex === 0)
                return { ...state, activeIndex: state.activeIndex }
            else
                return { ...state, activeIndex: state.activeIndex - 1 }
        }
        case "change":
            return { ...state, activeIndex: action.activeIndex }
        default:
            return state
    }
}