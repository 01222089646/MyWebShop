import React from 'react';
import { FormGroup, InputGroup, FormControl,  Button, Row , Col  } from 'react-bootstrap'
class Help extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
                  <h2>TRUNG TÂM TRỢ GIÚP KHÁCH HÀNG</h2>

          <form>
          <Col xs={6} md={4}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon >   What's your problem?   </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>  Your   Name   </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>    Phone number    </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>    Address    </InputGroup.Addon>
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
            </Col>

            <h2></h2>



   

            
          </form>;
                </div>
      </div>
    )
  }
}

export default Help;