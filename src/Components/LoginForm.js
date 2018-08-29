import React, { Component } from 'react';


import { 
    Form, 
    FormGroup, 
    Col, 
    FormControl, 
    ControlLabel, 
    Checkbox, 
    Button,
    Grid,
    Row,
    
    
} from 'react-bootstrap';

import './Styles/LoginForm.css';

import DataUtils from '../Utils/DataUtils';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {loginname: "", password: ""},
            logged: false
        };

        let session = this.getSession();
        if(session !== null) {
            this.state.logged = true;
        }
        this.onKeyDownHandle = this.onKeyDownHandle.bind(this);
    }
   
   
   
    componentWillMount(event) {
        if(this.state.logged === true) {
            window.location.href = "/";
        }
    }
    getSession() {
        let session = window.localStorage.getItem("session");
        if(session != null) {
            return JSON.parse(session);
        }
        return null;
    }
    onSubmit(event, keyCode) {
        if(this.state.loginname === "" || this.state.data.password === "")  {
            alert("Invalid data");
        } else {

            let userInfo = DataUtils.checkUser(this.state.data.loginname, this.state.data.password);

            console.log(333, userInfo)
            if(userInfo != null) {
                window.localStorage.setItem("session", JSON.stringify(userInfo));
                window.location.href="/";
            }
        }
    }
    onKeyDownHandle(event) {
        if(event.keyCode === 13) {
            this.onSubmit(event, 13);
        }
    }
    onHandle(event) {
        let newState = {
            data: this.state.data
        };

        let inputName = event.target.name;
        newState.data[inputName] = event.target.value;
        
        this.setState(newState);
    }
    render() {
        if(this.state.logged === true) {
            return (<div></div>);
        }
        return (
           <Form horizontal className="app-login-form">
            <Grid>
                <Row className="show-grid">
                    <Col xs={0} md={4} sm={3} lg={4}></Col>
                    <Col xs={12} md={4} sm={6} lg={4}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email
                                </Col>
                                <Col sm={9}>
                                    <FormControl onKeyUp={this.onKeyDownHandle} name="loginname" onChange={this.onHandle.bind(this)} type="email" value={this.state.data.loginname} placeholder="Email" />
                                </Col>
                            </FormGroup>
                    </Col>
                    <Col xs={12} md={4} sm={3} lg={4}></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={0} md={4} sm={3} lg={4}></Col>
                    <Col xs={12} md={4} sm={6} lg={4}>
                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password
                                </Col>
                                <Col sm={9}>
                                    <FormControl onKeyUp={this.onKeyDownHandle} name="password" onChange={this.onHandle.bind(this)} type="password" value={this.state.data.password} placeholder="Password" />
                                </Col>
                            </FormGroup>
                    </Col>
                    <Col xs={12} md={4} sm={3} lg={4}></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={0} md={4} sm={3} lg={4}></Col>
                    <Col xs={12} md={4} sm={6} lg={4}>
                      
                            <FormGroup>
                                <Col smOffset={3} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>
                    </Col>
                    <Col xs={12} md={4} sm={3} lg={4}></Col>
                </Row>
                <Row>
                    <Col xs={0} md={4} sm={3} lg={4}></Col>
                    
                    <Col xs={12} md={3} sm={6} lg={3}>
                            <Button className="btn-signin" type="button" onClick={this.onSubmit.bind(this)} >ĐĂNG NHẬP</Button>
                        </Col>
                                           
                    

               
                    
                   
                    
                    
                        <Col xs={12} md={3} sm={6} lg={3}> 
                            
                            
                            <Button onClick={()=>{window.location.href="/signup"}}>Đăng kí</Button>
                        
                        </Col>
                                           
                    <Col xs={12} md={4} sm={3} lg={4}></Col>

                </Row>
            </Grid>

                        
            </Form>
            



            


        );
       
    }
}

export default LoginForm;
