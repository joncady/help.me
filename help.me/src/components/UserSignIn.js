import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert, Container } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

export class UserSignIn extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        }
    }

    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    signIn = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((firebaseUser) => {
                console.log("signed in");
                window.location.hash = "#/community"
            }).catch((err) => this.setState({ errorMessage: err.message }));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{textAlign: 'center', paddingTop: '100px', marginBottom: '100px'}}>
                    <a href="#/"><img className="LogInLogo" src={require("../images/LogoDraftOne.png")} alt="Logo"></img></a>
                </div>
                <Container>
                    <Form style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" autoComplete="email" value={this.state.email} onChange={(event) => this.updateValue("email", event.target.value)} id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={(event) => this.updateValue("password", event.target.value)} id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                        <div style={{textAlign: 'center'}}>
                            <Button onClick={(event) => this.signIn(event)} color="primary">Sign In</Button>
                        </div>
                        <div style={{textAlign: 'center', padding: '5px', paddingTop: '100px'}}>
                            <a href="#/signup">Don't have an account? Sign up here.</a>
                        </div>
                        <div style={{textAlign: 'center', padding: '5px', paddingBottom: '50px'}}>
                            <a href="#/">Forgot your password? Click here.</a>
                        </div>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }


}

export default UserSignIn;
