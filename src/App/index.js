import React, { Component } from "react"
import { Route, Switch } from "react-router"
import PostContainer from "./Post/"
import CategoryContainer from "./Category/"
import "./index.css"

class App extends Component {
    render() {
        const {
            history: { push }
        } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div onClick={() => push("/post")}>Post</div>
                <div onClick={() => push("/category")}>Category</div>
                <Switch>
                    <Route exact path="/post" component={PostContainer} />
                    <Route
                        exact
                        path="/category"
                        component={CategoryContainer}
                    />
                </Switch>
            </div>
        )
    }
}

export default App
