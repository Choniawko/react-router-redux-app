import ActionCreator from "../actionCreator"

export default {
    getPosts: ActionCreator("POST_GET_POSTS"),
    updatePosts: ActionCreator("POST_UPDATE_POSTS"),
    setError: ActionCreator("POST_SET_ERROR")
}
