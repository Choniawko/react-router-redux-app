import actions from "./actionCreators"

const initialState = {
    categories: [],
    count: 0,
    previos: null,
    next: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.updateCategories.type:
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}
