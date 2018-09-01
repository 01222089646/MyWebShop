import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Product from './Product';
import DataUtils from '../../Utils/DataUtils';

const NUMBER_OF_ROW = 3;

class ProductList extends React.Component {
    getProductList() {
        let type = this.props.type;
        return DataUtils.getProductList(type);
    }

    buildProductList() {
        let productListTemplate = [];
        let productData = this.getProductList();
        let productList = [];
        for(let index in productData) {
            productList.push(
                <Col key={index} xs={12} md={3}>
                    <Product data = {productData[index]} />
                </Col>
            )
            if(productList.length == NUMBER_OF_ROW) {
                productListTemplate.push(
                    <Row key={"row-"+index}>
                        {productList}
                    </Row>
                )
                productList = [];
            }
           
        }
        if(productList.length && productList.length < NUMBER_OF_ROW) {
            productListTemplate.push(
                <Row key={"row-last"}>
                    {productList}
                </Row>
            )
        }


        return productListTemplate;
    }
    render() {
        let productList = this.buildProductList();
        console.log(111)
        return (
            <div style={{marginTop: '10px'}}>
                <Grid className="show-grid">
                    
                        {productList}
                    
                </Grid>
            </div>
        )
    }
}

export default ProductList;