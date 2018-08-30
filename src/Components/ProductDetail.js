import React from 'react';
import queryString from 'query-string';
import DataUtils from '../Utils/DataUtils';

import CurrencyFormat from 'react-currency-format';
import {
    Grid, Row, 
    Col, Image, 
    ListGroup, ListGroupItem, 
     Button, FormGroup, HelpBlock,
    ControlLabel, FormControl,
    Panel
    } from 'react-bootstrap';

import "./Styles/ProductDetail.css";


function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Id: null, info: null, isEdit: false};

        this.state.Id = this.getIdFromQueryString();
        if(this.state.Id === 0) {
            this.state.isEdit = true;
        }
        this.state.info = this.getProduct();
        this.handleChange = this.handleChange.bind(this);
    }

   
    handleChange(event) {
        let name = event.target.name;
        let _info = this.state.info;
        _info[name] = event.target.value;
        this.setState({info: _info});
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
        if(this.state.Id !== 0) {
            product = DataUtils.getProduct(this.state.Id);
        } else {
            product = {
                id: 0,
                name: "",
                img: "",
                price: 0,
                type: "",
                brand: "",
                salesoff: 0,
                description: ""
            }
        }
        return product;
    }

    getIdFromQueryString() {
        let Obj = null;
        if(this.props.location && this.props.location.search) {
            Obj = queryString.parse(this.props.location.search);
        }
        if(Obj.id !== undefined) {
            Obj.id = parseInt(Obj.id);
        }

        /*if(Obj.id !== undefined) {
            return Obj.id;
        } else {
            return null;
        }*/
        return Obj.id !== undefined?Obj.id:null;
    }

    onEdit(event) {
        this.setState({isEdit: true});
    }
    onRemove(event) {
        DataUtils.removeProduct(this.state.info);
    }
    onSave(event) {
        if(this.state.info.id === 0) {
            DataUtils.createProduct(this.state.info);
        } else {
            DataUtils.saveProduct(this.state.info);
        }
    }

    buildEditProductTemplate()
    {
        const formInstance = (
            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                name="name"
                label="Tên Sản Phẩm"
                placeholder="Nhập tên sản phẩm"
                defaultValue={this.state.info.name}
                onChange= {this.handleChange}
              />
              <FieldGroup
                id="formControlsEmail"
                type="text"
                name="img"
                label="Hình Ảnh"
                placeholder="Nhập địa chỉ email"
                defaultValue={this.state.info.img}
                onChange= {this.handleChange}
              />

              <FieldGroup
                id="formControlsType"
                type="text"
                name="type"
                label="Danh Mục Sản Phẩm"
                placeholder="Nhập danh mục sản phẩm"
                defaultValue={this.state.info.type}
                onChange= {this.handleChange}
              />

              <FieldGroup
                id="formControlsBrand"
                type="text"
                name="brand"
                label="Thương Hiệu"
                placeholder="Nhập thương hiệu"
                defaultValue={this.state.info.brand}
                onChange= {this.handleChange}
              />

              <FieldGroup
                id="formControlsPrice"
                type="number"
                name="price"
                label="Giá Sản Phẩm"
                placeholder="Nhập Giá Sản Phẩm"
                value={this.state.info.price}
                onChange= {this.handleChange}
              />

              <FieldGroup
                id="formControlsSaleoff"
                type="number"
                name="salesoff"
                label="Giảm Giá"
                placeholder="Nhập Phần Trăm"
                value={this.state.info.salesoff}
                onChange= {this.handleChange}
              />
              <FormGroup controlId="formControlsDescription">
                <ControlLabel>Mô Tả</ControlLabel>
                <FormControl defaultValue={this.state.info.description} componentClass="textarea" placeholder="textarea" />
              </FormGroup>  
              <Button type="button" onClick={this.onSave.bind(this)} bsStyle="primary">Lưu</Button>
            </form>
          );

          return formInstance;
    }

    buildImage() {
        let imageTemplate = [];
        if(this.state.info != null) {
            imageTemplate.push(
                <div key={1}>
                    <Image className="product-image" src={this.state.info.img} responsive />
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


            let HeaderProduct = (
                <div>
                    <span>{this.state.info.name}</span>
                    <br/>
                    <span className="product-detail-tool product-detail-edit"><a href="javascript:void(0)" onClick={this.onEdit.bind(this)}>Chỉnh Sửa</a></span>
                    <br/>
                    <span className="product-detail-tool product-detail-delete"><a href="javascript:void(0)" onClick={this.onRemove.bind(this)}>Xóa</a></span>
                </div>
            );

            desTemplate.push(
                <div key={1}>
                    <ListGroup>
                        <ListGroupItem className="product-detail-des-name" header={HeaderProduct}>
                            <span>Thương hiệu: <span className="product-detail-des-company">{this.state.info.brand}</span></span>
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

        if(this.state.isEdit === true) {
            let editTemplate = this.buildEditProductTemplate();
            return (
                <div>
                    <Panel className="page-panel product-detail" bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">User Management</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <Grid fluid={false}>
                                <Row className="show-grid">
                                <Col className="product-edit" xs={12} sm={12} md={12}>
                                    {editTemplate}
                                </Col>
                            </Row>
                            </Grid>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        }

        //let productDetail = this.buildProductDetail();
        let imageTemplate = this.buildImage();
        let desTemplate = this.buidDescription();
        return (
            <div className="product-detail">
                <Grid fluid={false}>
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


