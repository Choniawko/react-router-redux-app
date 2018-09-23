import ActionCreator from "../actionCreator"

export default {
    getCategories: ActionCreator("GET_CATEGORIES"),
    updateCategories: ActionCreator("UPDATE_CATEGORIES"),
    getFavoriteCategories: ActionCreator("GET_FAVORITE_CATEGORIES")
}
