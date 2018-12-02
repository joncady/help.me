import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert, Container } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

class UserSignUp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        }
    }

    signUp = (event) => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((firebaseUser) => {
                firebase.auth().currentUser.updateProfile({
                    displayName: this.state.displayName
                }).then(() => {
                    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
                    window.location.hash = "#/";
                }); 
            }).catch((err) => this.setState({ errorMessage: err.message }));
    }

    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ textAlign: 'center', paddingTop: '100px', marginBottom: '100px' }}>
                    <a href="#/"><img className="LogInLogo" src={require("../images/LogoDraftOne.png")} alt="Logo"></img></a>
                </div>
                <Container>
                    <Form style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
                        <FormGroup>
                            <Label for="displayName">Display Name</Label>
                            <Input type="displayName" name="displayName" value={this.state.displayName} onChange={(event) => this.updateValue("displayName", event.target.value)} id="display-name" placeholder="Display name" />
                        </FormGroup>
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
                            <Button onClick={(event) => this.signUp(event)} color="primary">Sign Up</Button>
                        </div>
                        <div style={{textAlign: 'center', padding: '5px', paddingTop: '120px'}}>
                            <a href="#/signin">Already have an account? Sign in here.</a>
                        </div>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default UserSignUp