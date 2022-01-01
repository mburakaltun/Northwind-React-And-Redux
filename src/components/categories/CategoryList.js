import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"
import {getCategories} from "../../redux/actions/categoryActions";
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories()
    }

    render() {
        return (
            <div>
                <h1> Category List {this.props.categories.length } </h1>
                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem>
                                { category.categoryName }
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoriesListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);