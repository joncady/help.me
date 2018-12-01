import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

class UserSignUp extends Component  {

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
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            window.location.hash = "#/update";
        }).catch((err) => this.setState({ errorMessage: err.message }));
    }

    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={(event) => this.updateValue("email", event.target.value)} id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={(event) => this.updateValue("password", event.target.value)} id="examplePassword" placeholder="Password" />
                </FormGroup>
                {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                <Button onClick={(event) => this.signUp(event)}>Sign Up</Button>
            </Form>
        );
    }
}

export default UserSignUp