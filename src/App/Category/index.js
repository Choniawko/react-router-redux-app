import React, { Component } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/Category/actionCreators"

class CategoryContainer extends Component {
    componentDidMount() {
        const { getCategories } = this.props
        getCategories()
    }
    render() {
        const { categories } = this.props
        return (
            <div>
                {categories.map(({ id, name }) => (
                    <div key={id}>{name}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = store => ({
    categories: store.category.categories
})
const mapDispatchToProps = {
    getCategories: actionCreators.getCategories.create
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)
