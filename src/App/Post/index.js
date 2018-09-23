import React, { Component } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/Post/actionCreators"

class PostContainer extends Component {
    componentDidMount() {
        const { getPosts } = this.props
        getPosts()
    }
    render() {
        const { posts } = this.props
        return (
            <div>
                {posts.map(({ id, title }) => (
                    <div key={id}>{title}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = store => ({
    posts: store.post.posts
})
const mapDispatchToProps = {
    getPosts: actionCreators.getPosts.create
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer)
