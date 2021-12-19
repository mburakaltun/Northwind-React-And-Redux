import React, {Component} from 'react';
import {Row, Col} from "reactstrap";
import ProductList from "../products/ProductList";
import CategoryList from "../categories/CategoryList";

class Dashboard extends Component {
    render() {
        return (
           <Row>
               <Col xs='3'> <CategoryList/> </Col>
               <Col xs='9'> <ProductList/> </Col>
           </Row>
        );
    }
}

export default Dashboard;