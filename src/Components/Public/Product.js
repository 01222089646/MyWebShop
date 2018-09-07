import React from 'react';

import {Jumbotron, Button, Thumbnail} from 'react-bootstrap';

import CurrencyFormat from 'react-currency-format';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "Trái Táo",
                img: "/images/products/tao 1.jpg",
                price: 100000,
               
            }
        };
        if(props.data) {
            this.state.data = props.data;
        }
    }
    render() {
        let salesOffPrice = this.state.data.price * (this.state.data.salesoff*0.01);
        let salePrice = (<CurrencyFormat value={this.state.data.price - salesOffPrice} decimalSeparator={'.'} displayType={'text'} thousandSeparator={','} suffix={'đ'} />);
        let realPrice = (<CurrencyFormat value={this.state.data.price} decimalSeparator={'.'} displayType={'text'} thousandSeparator={','} suffix={'đ'} />);

        return (
            <div>
                <Thumbnail className="product-item" src="/images/products/tao 1.jpg" alt="">
                    {this.state.data.name}
                    <p className="product-item-price">
                        <span className="sale-price">
                            {salePrice}
                        </span>
                        <span className="real-price">
                            {realPrice}
                        </span>
                       
                    </p>
                    <p>
                        <Button style={{opacity: 0, cursor: "default"}} disabled bsStyle="default">Button</Button>    
                        <Button className="pull-right" bsStyle="default">Liên Hệ</Button>
                    </p>
                </Thumbnail>
            </div>
        );
    }
}

export default Product;