import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Route } from "react-router"
import { ConnectedRouter } from "react-router-redux"
import history from "./common/services/history"
import { store } from "./store"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
)
registerServiceWorker()
