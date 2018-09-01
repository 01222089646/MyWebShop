import React from 'react';
import {Panel, Table, ButtonToolbar, Button} from 'react-bootstrap';
import DataUtils from '../Utils/DataUtils';

import $ from 'jquery';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.onDetail = this.onDetail.bind(this);
    }

    onCreateNew(event) {
        window.location.href = "/productdetail?id=0";
    }
    onDetail(event) {
        let Id = $(event.target).parent().attr("id");
        window.location.href = "/productdetail?id="+Id;
        //event.preventDefault();
    }

    buildProductList() {
        let ProductList = DataUtils.getProductList();
        let _productList = [];

        for(let i in ProductList) {
            _productList.push(
                <tr key={i} id={ProductList[i].id} onDoubleClick={this.onDetail}>
                    <td>{parseInt(i) + 1}</td>
                    <td>{ProductList[i].name}</td>
                    <td>{ProductList[i].type}</td>
                    <td>{ProductList[i].price}</td>
                    <td>{ProductList[i].salesoff}</td>
                </tr>
            )
        }

        return _productList;
    }

    render() {
        let _productList = this.buildProductList();
        return (
            <div>
                <Panel className="page-panel" bsStyle="info">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">Danh Sách Sản Phẩm</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ButtonToolbar>
                            <Button type="button" onClick={this.onCreateNew.bind(this)}>Tạo Mới</Button>
                        </ButtonToolbar>;
                        <Table className="product-list" striped bordered condensed hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Danh Mục Sản Phẩm</th>
                                <th>Giá Sản Phẩm</th>
                                <th>Giảm Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {_productList}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Product;