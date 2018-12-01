import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
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
        <Form>
            <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" autoComplete="email" name="email" value={this.state.email} onChange={(event) => this.updateValue("email", event.target.value)} id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" autoComplete="current-password" name="password" value={this.state.password} onChange={(event) => this.updateValue("password", event.target.value)} id="examplePassword" placeholder="Password" />
                </FormGroup>
                {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                <Button onClick={(event) => this.signIn(event)} color="primary">Sign In</Button>
            </Form>
        );
    }


}

export default UserSignIn;