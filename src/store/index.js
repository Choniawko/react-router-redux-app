import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { routerMiddleware, connectRouter } from "connected-react-router"
import history from "../common/services/history"

import { epics as CategoryEpics } from "./Category/epics"
import { epics as PostEpics } from "./Post/epics"

import categoryReducer from "./Category/reducer"
import postReducer from "./Post/reducer"

const rootReducer = combineReducers({
    post: postReducer,
    category: categoryReducer
})

const rootEpic = combineEpics(CategoryEpics, PostEpics)

const epicMiddleware = createEpicMiddleware()
const reduxRouterMiddleware = routerMiddleware(history)

export const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(epicMiddleware, reduxRouterMiddleware))
)
epicMiddleware.run(rootEpic)
