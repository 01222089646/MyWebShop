import React from 'react';
import queryString from 'query-string';
import DataUtils from '../Utils/DataUtils';

import CurrencyFormat from 'react-currency-format';
import {Grid, Row, Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap';

import "./Styles/ProductDetail.css";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Id: null, info: null,isEdit:false};
        
        this.state.Id = this.getIdFromQueryString();
        if(this.state.Id=== 0) {
            this.state.isEdit =true;
        }
        this.state.info = this.getProduct();
        this.handleChange = this.handleChange.bind(this);
    }


    buildProductDetail() {
        let productDetail = [];
        let product = this.getProduct();
        if(product != null) {
            productDetail.push(
                <div key={1}>
                    <span>Name: {product.name}</span>
                    <span>Price: {product.price}</span>
                    <span>Description: {product.description}</span>
                </div>
            );
        }

        return productDetail;
    }

    getProduct() {
        let product = null;
        if(this.state.Id != null) {
            product = DataUtils.getProduct(this.state.Id);
        }
        return product;
    }

    getIdFromQueryString() {
        let Obj = null;
        if(this.props.location && this.props.location.search) {
            Obj = queryString.parse(this.props.location.search);
        }
        if(Obj.id) {
            Obj.id = parseInt(Obj.id);
        }
        return Obj.id !==undefined?Obj.id:null;
       /* return Obj.id || null;*/
    }

    buildImage() {
        let imageTemplate = [];
        if(this.state.info !== null) {
            console.log(this.state.info.img)
            imageTemplate.push(
                <div key={1}>
                    <Image src={this.state.info.img} responsive />;
                </div>
            )
        }
        return imageTemplate;
    }

    buidDescription() {
        let desTemplate = [];
        if(this.state.info != null) {
            let salesOffPrice = this.state.info.price * (this.state.info.salesoff*0.01);
            let salesPrice = this.state.info.price - salesOffPrice;
            let salePriceTemp = (<CurrencyFormat value={salesPrice} decimalSeparator={'.'} displayType={'text'} thousandSeparator={','} suffix={' đ'} />);
            desTemplate.push(
                <div key={1}>
                    <ListGroup>
                        <ListGroupItem className="product-detail-des-name" header={this.state.info.name}>
                            <span>Thương hiệu: <span className="product-detail-des-company">{this.state.info.company}</span></span>
                        </ListGroupItem>
                        <ListGroupItem className="product-detail-des-price" header={salePriceTemp}>
                            <span>
                                Tiết kiệm: <span className="product-detail-des-saleoff">{this.state.info.salesoff} %</span>
                                <span>
                                    <CurrencyFormat 
                                        value={salesOffPrice} 
                                        decimalSeparator={'.'} 
                                        displayType={'text'} 
                                        thousandSeparator={','} suffix={' đ'} 
                                        renderText={value => <span> ({value})</span>} 
                                    />
                                </span>
                            </span>
                            <span>Gía thị trường: &nbsp;
                                <span>
                                    <CurrencyFormat value={this.state.info.price} decimalSeparator={'.'} displayType={'text'} thousandSeparator={','} suffix={' đ'} />
                                </span>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem header="">
                            <span dangerouslySetInnerHTML={{__html:this.state.info.description}}></span>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            );
        }
        return desTemplate;
    }

    render() {
        //let productDetail = this.buildProductDetail();
        let imageTemplate = this.buildImage();
        let desTemplate = this.buidDescription();
        return (
            <div className="product-detail">
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col className="product-detail-img" xs={12} sm={6} md={6}>
                            {imageTemplate}
                        </Col>
                        <Col className="product-detail-des" xs={12} sm={6} md={6}>
                            {desTemplate}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ProductDetail;