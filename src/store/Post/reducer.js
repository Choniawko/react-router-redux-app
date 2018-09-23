import actions from "./actionCreators"

const initialState = {
    posts: [],
    count: 0,
    previos: null,
    next: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.updatePosts.type:
            return {
                ...state,
                posts: payload
            }
        default:
            return state
    }
}
