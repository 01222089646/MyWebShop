import React from 'react';
import { FormGroup, InputGroup, FormControl,  Button, Row , Col ,Jumbotron  } from 'react-bootstrap'
import './Styles/Help.css';


class Help extends React.Component {
  
  render() {
    return (
      
      <Jumbotron>
        <div>  
                  <h2>TRUNG TÂM TRỢ GIÚP KHÁCH HÀNG</h2>
                  
          
         
            <FormGroup >
              <InputGroup >
                <InputGroup.Addon  >   Vấn đề là gì?   </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon> ..Tên và Họ..  </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>    Số điện thoại    </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>   .Địa chỉ nhà.   </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <Row>
                    <Col xs={0} md={4} sm={3} lg={4}></Col>
                    <Col xs={12} md={3} sm={6} lg={3}>
                        <Button>Submit</Button>
                    </Col>
                                           
                    <Col xs={12} md={4} sm={3} lg={4}></Col>
            </Row>
            

          

       
      </div>
      </Jumbotron>
      
    )
    
  }
  
}

export default Help;