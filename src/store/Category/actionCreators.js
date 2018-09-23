import ActionCreator from "../actionCreator"

export default {
    getCategories: ActionCreator("CATEGORY_GET_CATEGORIES"),
    updateCategories: ActionCreator("CATEGORY_UPDATE_CATEGORIES"),
    setError: ActionCreator("CATEGORY_SET_ERROR")
}
